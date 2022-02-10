import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const PostCard = ({ slide }) => {
  return (
    <div>
      <div>
        <img src={slide.image} alt="my photo" className="image" />
        <div>
          <div style={{}}>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="checkedH"
                />
              }
              label={`${slide.likeCount} Likes`}
            />
          </div>
          <div>
            {/* Comments Section */}
            <div style={{}}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CommentIcon />}
                    checkedIcon={<CommentIcon />}
                  />
                }
                label="Comments"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
