import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/SFooter";
import supHeroImage from "../../../images/usersStoryPage/us-project1.jpg"

import "../singleUserStory/singleUserStoryPage.css"
import CustomerImage from "../../../images/testimony/CustomerPic.png"
import Logo from "../../../images/usersStoryPage/logo.png"


import UserStoryVerticalGallery from "./UserStoryVertical";


const SingleUserStoryPage = () => {
  return (
    <div className="userstorydetails">
      <Navbar background="white" color="black" />
      <div className="sup-hero-pic">
        <img src={supHeroImage} />
      </div>
      <div className="sup-page-full-article">
      <div>
      <div className="sup-pageFullArticle-title">
          <h2>CASE STUDY: Golden Gate Ventures</h2>
          <p>
            <strong>Company Name:  </strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Calgary Construction Co."
          </p>

          
        </div>
        <div className="sup-pageFullArticle-description">

          <div className="customer-image">
            <img src={CustomerImage}></img>
            <p><strong>
            "From the very first meeting, the team at Collegium embraced my vision
          with enthusiasm. Their collaborative spirit turned my ideas into
          detailed plans, weaving innovation and functionality into every aspect
          of the project."
              </strong></p>
          </div>
          <p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham


"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
</p>

      </div>

      </div>

      
<div className="sup-page-logo">
      <img src={Logo}></img>
      <p>Location:
      <br/> Calgary, AB, Canada
      </p>
      <p>Primary Industry:
      <br/> Real Estate
      </p>

      <h3>Project Info</h3>
      <p><strong>Timeline:</strong>
      <br/> 2022-2023
      </p>

      <p><strong>Category:</strong>
      <br/> Construction Business
      </p>

      <p><strong>Type:</strong>
      <br/> Residential
      </p>

      <p><strong>Size:</strong>
      <br/> 230.000 m2
      </p>



      </div>
      
      </div>

      <UserStoryVerticalGallery/>
      <Footer />
    </div>
  );
};


    
export default SingleUserStoryPage;