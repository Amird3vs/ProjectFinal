<script>
export default {
    name: 'email'
}
</script>

<template>
    <main>
        <div class="email-header">
            <div class="header-logo">
                <h3>SalinSenyas</h3>
                <img class="email-logo" src="../assets/img/nobg.png" alt="Company Logo">
                <h3>SignTudy</h3>
            </div>
            <p class="tagline">It's a <span class="sign">sign </span>to learn!</p>
        </div>
        <div class="email-content">
            <p class="email-to">Hello <a href="">salinsenyas.mm24@gmail.com</a>,</p>
            <p class="email-to1">Thank you for your reaching out to us. We appreciate your interest in learning more
                about sign language and we apologize for any inconvenience you may have experienced in not finding what
                you were looking for in our system. </p>
            <p class="email-to1">
                Rest assured, we are actively working to enhance our collection of sign language materials to better
                serve you and others in our community. After reviewing our available resources, we will make every
                effort to supply you with sign language materials applicable to:
            </p>
            <div class="concern-container">
                <p class="concern">Classification: <strong>Able</strong></p>
                <p class="concern">Topic requested: <strong>How to deal with deaf</strong></p>
                <p class="concern">Date Submitted: <strong>5/1/2024 4:04:20 PM</strong></p>
            </div>
            <p class="content-footer">
                We're committed to providing exceptional service and support throughout your exploration and we look
                forward to the opportunity to assist you further.
            </p>
            <p class="content-link">To explore our comprehensive resources and delve deeper into the world of sign
                language, visit:
                <a href="https://www.signtudy.com">https://www.signtudy.com</a>.
            </p>
            <p>Best regards,</p>
            <p>SalinSenyas Development Group</p>
        </div>
        <div class="email-footer">
            <div class="footer-msg">
                <p>If you have any further questions, concerns, and topic requests, please don't hesitate to reach out
                    to us.</p>
            </div>
            <div class="footer-icons">
                <a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
            </div>
            <div class="copyright-container">
                <p class="copyright">&copy; 2024 SalinSenyas. All rights reserved.</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(144, 238, 144, 0.1);
}

.email-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #3c5448;
    padding: 20px;
}

.header-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}

.tagline {
    color: #808080;
}

.sign {
    color: #bcb88a;
    font-weight: bold;
}

.email-logo {
    height: 60px;
    width: 60px;
}

.email-content {
    width: 80%;
    background-color: #fff;
    padding: 50px;
    font-size: 0.7rem;
    border-radius: 20px;
}

.email-to {
    margin-bottom: 30px;
}

.email-to1 {
    margin-bottom: 10px;
}

.concern-container {
    margin-bottom: 20px;
}

.content-link {
    margin-bottom: 50px;
}

.email-footer {
    width: 80%;
    text-align: center;
    color: #666;
    padding: 20px;
}

.footer-msg {
    margin-bottom: 10px;
}

.footer-icons {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
}

.footer-icons i {
    width: 40px;
    height: 40px;
    margin: 0 10px;
    font-size: 20px;
    background-color: #3c5448;
    color: #bcb88a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-icons a {
    text-decoration: none;
}

.copyright-container {
    margin-top: 10px;
}

.copyright {
    font-size: 0.7rem;
    color: #808080;
}
</style>