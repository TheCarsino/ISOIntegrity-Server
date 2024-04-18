import { Router } from "express";
import {
  getOrganization,
  getOrganizationbyId,
  getOrganizationStructure,
} from "../controllers/organization.controller.js";

const router = Router();

router.get("/organization", getOrganization);
router.get("/organization/:id", getOrganizationbyId);
router.get("/organization/structure/:id", getOrganizationStructure);

export default router;
