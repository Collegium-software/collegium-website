import React from "react";
import "../comparison/comparison.css";
import Button from "../button/Button";
import comparison from "../../images/comparison/comparison.jpeg";

const Comparison = () => {
  return (
    <section className="comparisonSection">
      <div className="comparison-container">
        <div className="text-container">
          <h2>Why Are We Different?</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem..
          </p>
          <div className="comparisonButton">
            <Button label="Contact Us" to="/contactus" />
          </div>
        </div>
        <div className="comparison-picture">
          <img src={comparison} alt="comparison" />
        </div>
      </div>
    </section>
  );
};

export default Comparison;
