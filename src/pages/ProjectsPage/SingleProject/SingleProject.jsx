import "../SingleProject/singleProject.css"
import SingleProjectImage from "../../../images/projectsPage/singleProjectImage.png"


const SingleProject = () => {


  return ( 
  <div className="single-project-container">
    <div className="sp-subtitle-container">
    <div className="sp-subtitle-container-img">
      <img src={SingleProjectImage} alt="collegium project" className="project-image"></img>
    </div>

    <div className="project-subtitle-text">
      <h2>Castle Crest Condos</h2>
      <p>Our project involves the construction of a residential building in the heart of [City Name]. The building will consist of [number of floors] floors and will offer [number of units] units, catering to the diverse housing needs of the community </p>
      <h2> Info</h2>
    
         <p>
            <strong>Timeline:</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023-2024
        </p>
        <p>
            <strong>Location:</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Calgary, AB, Canada
        </p>

        <p>
            <strong>Category:</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction Business
        </p>

        <p>
            <strong>Type:</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Residential
        </p>

        <p>
            <strong>Size:</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13000 m3
        </p>

        <p>
            <strong>Client:</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Affordable living"
        </p>


    </div>

  </div>

  <div className="sp-main-text-container">
    <p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our project involves the construction of a residential building in the heart of [City Name]. The building will consist of [number of floors] floors and will offer [number of units] units, catering to the diverse housing needs of the community.

Scope:

Excavation and site preparation.
Construction of foundation and structural framework.
Installation of utilities including plumbing, electrical, and HVAC systems.
Interior finishing including flooring, painting, and fixtures.
Exterior finishing such as cladding, roofing, and landscaping.
Timeline:
The project is estimated to span [number of months/years] from groundbreaking to completion, with periodic milestones and progress reviews.

Project Team:

Project Manager: Oversees the entire construction process, manages timelines, and ensures quality control.
Architect: Designs the building layout, ensures compliance with building codes, and liaises with local authorities for permits.
Civil Engineers: Responsible for structural design, ensuring the building's stability and safety.
Construction Workers: Skilled laborers responsible for executing various construction tasks under the supervision of foremen.
Electricians, Plumbers, HVAC Technicians: Specialists responsible for installing utilities and ensuring functionality.
Budget:
The budget for this project encompasses expenses related to labor, materials, equipment rental, permits, and overhead costs. A detailed breakdown of the budget is available upon request.
Safety Measures:
Ensuring the safety of our workers and the surrounding community is paramount. We adhere to strict safety protocols, provide appropriate safety gear, conduct regular safety training sessions, and maintain a clean and organized work site.

Quality Assurance:
Quality is at the forefront of our construction process. We utilize high-quality materials, employ skilled labor, and conduct rigorous quality checks at each stage of construction to ensure adherence to standards and specifications.

Environmental Considerations:
We are committed to minimizing the environmental impact of our construction activities. We adhere to sustainable construction practices, implement waste management strategies, and prioritize energy-efficient building systems.

Conclusion:
Our residential building construction project embodies our commitment to delivering high-quality, safe, and sustainable structures that enhance the communities we serve. Through meticulous planning, skilled execution, and unwavering dedication to quality, we aim to deliver a residential building that exceeds expectations and stands as a testament to our expertise in construction.  
    </p>

  </div>

</div>
   );
}
 
export default SingleProject;