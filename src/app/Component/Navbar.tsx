
import Link from "next/link"

export default function Navbar(){
    return(
        <div style={{display:"flex", justifyContent:"space-evenly",textAlign:"center" ,color:"black", backgroundColor:"white" ,height:"40px"}}>
            <Link href="/Home">Home</Link><br />
            <Link href="/About">About</Link><br />
            <Link href="/Job">Jobs</Link><br />
            <Link href="/Job/Programming">Programming</Link><br />
            <Link href="/Contact">Contact</Link>
        </div>
    );
};
