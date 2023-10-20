import { useState } from 'react';
import Rating from 'react-rating-stars-component';

function UserRating() {
    const [userRating, setUserRating] = useState(0);

    const handleRating = (rating) => {
        setUserRating(rating);
    };

    return (
        <div>
            <Rating
                count={5}
                onChange={handleRating}
                size={24}
                value={userRating}
            />
            <p>Your Rating: {userRating} stars</p>
        </div>
    );
}

export default UserRating;
