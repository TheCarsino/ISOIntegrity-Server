import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserbyId,
  updateUser,
  createRole,
  deleteRole,
  getRole,
  getRolebyId,
  updateRole,
  getUserPermission,
  createUserPermission,
  deleteUserPernission,
  authenticateUser,
} from "../controllers/auth.controller.js";

const router = Router();

router.get("/user", getUser);
router.get("/user/:id", getUserbyId);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.get("/role", getRole);
router.get("/role/:id", getRolebyId);
router.post("/role", createRole);
router.put("/role/:id", updateRole);
router.delete("/role/:id", deleteRole);

router.get("/user/permissions/:id", getUserPermission);
router.post("/user/permissions", createUserPermission);
router.delete("/user/permissions/:id", deleteUserPernission);

router.post("/authentication", authenticateUser);

export default router;
