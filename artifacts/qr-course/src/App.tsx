import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { useAuth } from "@/lib/auth";

import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import Assignments from "@/pages/Assignments";
import Analytics from "@/pages/Analytics";
import WeekView from "@/pages/WeekView";
import LectureView from "@/pages/LectureView";
import AssignmentRunner from "@/pages/AssignmentRunner";
import PracticeAssignment from "@/pages/PracticeAssignment";
import Diagnostics from "@/pages/Diagnostics";
import TopicPractice from "@/pages/TopicPractice";
import Reasoning from "@/pages/Reasoning";
import ReasoningRunner from "@/pages/ReasoningRunner";
import Grades from "@/pages/Grades";
import AdminMode from "@/pages/AdminMode";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const queryClient = new QueryClient();

function AuthLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

function Protected({ component: Component }: { component: React.ComponentType<any> }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return <AuthLoading />;
  if (!user) return <Redirect to="/" />;
  return <Component />;
}

function Home() {
  const { user, isLoading } = useAuth();
  if (isLoading) return <AuthLoading />;
  if (user) return <Redirect to="/dashboard" />;
  return <Landing />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard">
        <Protected component={Dashboard} />
      </Route>
      <Route path="/assignments">
        <Protected component={Assignments} />
      </Route>
      <Route path="/assignments/:id/practice">
        <Protected component={PracticeAssignment} />
      </Route>
      <Route path="/assignments/:id">
        <Protected component={AssignmentRunner} />
      </Route>
      <Route path="/analytics">
        <Protected component={Analytics} />
      </Route>
      <Route path="/reasoning">
        <Protected component={Reasoning} />
      </Route>
      <Route path="/reasoning/:id">
        <Protected component={ReasoningRunner} />
      </Route>
      <Route path="/grades">
        <Protected component={Grades} />
      </Route>
      <Route path="/admin">
        <Protected component={AdminMode} />
      </Route>
      <Route path="/diagnostics">
        <Protected component={Diagnostics} />
      </Route>
      <Route path="/weeks/:weekNumber">
        <Protected component={WeekView} />
      </Route>
      <Route path="/lectures/:lectureId">
        <Protected component={LectureView} />
      </Route>
      <Route path="/practice/topic/:topicId">
        <Protected component={TopicPractice} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={basePath}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </WouterRouter>
  );
}

export default App;
