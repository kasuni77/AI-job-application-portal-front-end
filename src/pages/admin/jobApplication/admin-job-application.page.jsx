import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getJobApplicationById, deleteJobApplication } from "@/lib/services/api/jobApplications";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

function AdminJobApplicationPage() {
  const [jobApplication, setJobApplication] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { applicationId } = useParams();
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!applicationId) return;
    getJobApplicationById(applicationId)
      .then((data) => {
        setJobApplication(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [applicationId]);

  const handleDeleteApplication = async () => {
    if (!applicationId) return;
    try {
      await deleteJobApplication(applicationId);
      navigate("/admin/jobs");
    } catch (error) {
      console.log("Failed to delete job application!", error);
    }
  };


  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4 py-5">
      <Separator />
      <div className="flex flex-col gap-y-4 py-5">
        <Card className="card-custom bg-foreground">
          <CardHeader className="flex-row items-center gap-x-4">
            
              <CardTitle>{jobApplication?.fullName}</CardTitle>
              <Badge
                className={cn({
                  "bg-red-500":
                    jobApplication?.rating?.toLocaleLowerCase() === "bad",
                  "bg-orange-400":
                    jobApplication?.rating?.toLocaleLowerCase() === "moderate",
                  "bg-teal-500":
                    jobApplication?.rating?.toLocaleLowerCase() === "good",
                  "text-sm": true, 
                  "p-2": true,    
                  "rounded-full": true, 
                })}
              >
                {jobApplication?.rating}
              </Badge>
            

            
              <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" >Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the job application.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setShowDialog(false)}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteApplication}>
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            
          </CardHeader>
        </Card>
      </div>

      <div>
        <Button variant="link" asChild>
          <Link to={"/admin/jobs"}>Back</Link>
        </Button>


      </div>
    </div>
  );
}

export default AdminJobApplicationPage;
