import "./Footer.css";
const Footer = () => {
  return (
    <footer class="mettamuse-footer">
  <div class="footer-container">

    <section class="newsletter-section">
      <h2>BE THE FIRST TO KNOW</h2>
      <p>Sign up for updates from mettâ muse.</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Enter your e-mail..." required/>
        <button type="submit">SUBSCRIBE</button>
      </form>
    </section>


    <div class="footer-content">
     
      <div class="footer-column">
        <h3>mettâ muse</h3>
        <ul>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Stories</a></li>
          <li><a href="/">Artisans</a></li>
          <li><a href="/">Boutiques</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/s">EU Compliances Docs</a></li>
        </ul>
      </div>


      <div class="footer-column">
        <h3>QUICK LINKS</h3>
        <ul>
          <li><a href="/">Orders & Shipping</a></li>
          <li><a href="/">Join/Login as a Seller</a></li>
          <li><a href="/">Payment & Pricing</a></li>
          <li><a href="/">Return & Refunds</a></li>
          <li><a href="/">FAQs</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms & Conditions</a></li>
        </ul>
      </div>


      <div class="footer-column">
        <h3>CONTACT US</h3>
        <ul>
          <li><a href="tel:+442211335360">+44 221 133 5360</a></li>
          <li><a href="mailto:customercare@mettamus.e.com">customercare@mettamus.e.com</a></li>
        </ul>
      </div>

   
      <div class="footer-column">
        <h3>CURRENCY</h3>
        <ul>
          <li><strong>USD</strong></li>
          <li>Transactions will be completed in Euros and a currency reference is available on how:</li>
        </ul>
      </div>


      <div class="footer-column">
        <h3>FOLLOW US</h3>
        <div class="social-icons">
          <a href="/"><img src="facebook-icon.png" alt="Facebook"/></a>
          <a href="/"><img src="instagram-icon.png" alt="Instagram"/></a>
          <a href="/"><img src="twitter-icon.png" alt="Twitter"/></a>
        </div>
        <div class="payment-methods">
          <p><strong>mettâ muse ACCEPTS</strong></p>
          <div class="payment-icons">
            <img src="visa-icon.png" alt="Visa"/>
            <img src="mastercard-icon.png" alt="Mastercard"/>
            <img src="paypal-icon.png" alt="PayPal"/>
          </div>
        </div>
      </div>
    </div>


    <div class="copyright">
      <p>Copyright © 2023 mettamus. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
};
export default Footer;
