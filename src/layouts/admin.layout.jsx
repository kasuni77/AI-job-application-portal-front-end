import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "@/components/shared/footer";

function AdminMainLayout() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      return navigate("/sign-in");
    }

    if (user?.publicMetadata?.role !== "admin") {
      return navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate, user]);

  return (
    <div>
      <div className="flex justify-end gap-x-4 items-center py-4">
        <Link to="/admin/jobs">Job Posts</Link>
        <Button asChild>
          <Link to="/admin/job/create">Post A Job</Link>
        </Button>
      </div>
      <div className="admin">
      <div className="overlay"></div>
      </div>
      <Outlet />
      <br /><br /><br />
      <Footer />
    </div>
  );
}

export default AdminMainLayout;
