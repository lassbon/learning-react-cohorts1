import { Store } from 'react-notifications-component';
import Header from "./Header"
import { Button, Container, Grid } from '@mui/material';
import Item from '@mui/material/ListItem'


const Register = () => {

    function handleClickme() {
        Store.addNotification({
            title: "Wonderful!",
            message: "yooo",
            type: "success",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });

    }

    return (
        <Container maxWidth="lg" margin="5">
            <Grid container spacing={2}>
            <Grid item xs={8}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
                <Item>xs=8</Item>
            </Grid>
            </Grid>
        </Container>
        // <Container>
            
        //     <Form>
        //             <Form.Group className="mb-3" controlId="formBasicEmail">
        //                 <Form.Label>Email address</Form.Label>
        //                 <Form.Control type="email" placeholder="Enter email" />
        //                 <Form.Text className="text-muted">
        //                 We'll never share your email with anyone else.
        //                 </Form.Text>
        //             </Form.Group>

        //             <Form.Group className="mb-3" controlId="formBasicPassword">
        //                 <Form.Label>Password</Form.Label>
        //                 <Form.Control type="password" placeholder="Password" />
        //             </Form.Group>
        //             <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //                 <Form.Check type="checkbox" label="Check me out" />
        //         </Form.Group>
        //         <Button variant="primary" type="button"  onClick={handleClickme}> Click me </Button> &nbsp;&nbsp;&nbsp;
        //             <Button variant="primary" type="submit" >
        //                 Submit
        //             </Button>
        //        </Form>
        //  </Container>
             
      
        
    )
}


export default Register
