import express from 'express';
import { currentUserRouter } from './routes/currentuser.route';
import { signinRouter } from './routes/signin.route';
import { signoutRouter } from './routes/signout.route';
import { signupRouter } from './routes/signup.route';

const app = express();

app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.listen(3000, () => {
    console.log("AUTH :: ACTIVE :: 3000");
});


//testing new system for deployment