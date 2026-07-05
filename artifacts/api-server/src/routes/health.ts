import { Router, type IRouter } from "express";
import { HealthCheckResponse } from "@workspace/api-zod";

const router: IRouter = Router();

// Deployment health checks ping the bare /api path (router is mounted at
// /api), so this must return 200 or Autoscale refuses to promote the build.
router.get("/", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

router.get("/healthz", (_req, res) => {
  const data = HealthCheckResponse.parse({ status: "ok" });
  res.json(data);
});

export default router;
