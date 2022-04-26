import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(logoutRoute);

async function logoutRoute(req, res) {
  req.session.destroy();
  res.json({ isLoggedIn: false, login: "", avatarUrl: "" });
}