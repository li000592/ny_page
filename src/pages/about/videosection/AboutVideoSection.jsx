import React from "react";
import { Grid } from "@mui/material";
import Video from "../../../assets/videos/about_video2.mp4";

function AboutVideoSection() {
  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className="text-section-container">
            <video
              preload="auto"
              webkit-playsinline="true"
              playsInline="playsinline"
              type="application/x-mpegURL"
              muted="muted"
              loop=""
              tabIndex="-1"
              autoPlay="autoplay"
              id="about-video"
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="text-section-container">
            {/* <h2>{title}</h2> */}
            <p>
              Astechnic has always been committed to its unique features in gas safety combustion, low-nitrogen
              combustion, fuel-saving combustion, and industrial kiln combustion system automation integration. Based on
              fully absorbing the world's most advanced combustion system control theory and digesting the technology of
              its supporting products, we continue to innovate and develop a series of combustion control products
              suitable for various countries.
            </p>
            <p>
              We are well aware that high-quality product quality and service quality are the foundation of our
              company's existence. We rely on the active support of our employees, closely follow the market, listen to
              customer needs, and develop products that are suitable for the market. Customer satisfaction is our
              unwavering pursuit. We can provide the most competitive solutions according to different customer needs,
              and provide safe, stable, and reliable pre-sales and after-sales services to meet customer requirements.
            </p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default AboutVideoSection;
