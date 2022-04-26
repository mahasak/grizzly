import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req, res) {


    try {
        // get user from database then:
        const user = { isLoggedIn: true, id: 230, name: 'test' };
        req.session.user = user;
        await req.session.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}