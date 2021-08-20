import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Comments = ({name,comment,date,star}) => {
    return ( 
        <div className="comments">
           
            <AccountCircleIcon/>
            <h5>{name}</h5>
            <MoreVertIcon className="dots"/>
            <div className="star_div">
            <StarIcon  style={{ color:"orange" }} className="stars"/> 
            <StarIcon style={{ color:"orange" }} className="stars"/> 
            <StarIcon style={{ color:"orange" }} className="stars"/> 
            <StarHalfIcon style={{ color:"orange" }} className="stars"/>
            <StarBorderIcon style={{ color:"orange" }} className="stars"/>
            </div>
            <p>{comment}</p>
        </div>
     );
}
 
export default Comments;