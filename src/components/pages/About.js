import{useState} from "react"
import Card from 'react-bootstrap/Card';

function About(){
    const [me, setMe] = useState({
        name: "Akhtar Alfarisi",
        nim: "320200401002",
        university: "Universitas Pertahanan",
        hobbies: "Read"
        });
        
    return(
        <>
            <Card style={{ width: '170vh' ,marginTop: '40px'}}>
                <Card.Body>
                <Card.Title>The Name is {me.name}</Card.Title>
                <Card.Text>
                from the beloved {me.university} 
                </Card.Text>
                <Card.Text>
                assign with {me.nim} NIM
                </Card.Text>
                <Card.Title>
                i like to {me.hobbies}
                </Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}
export default About