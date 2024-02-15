<svelte:head>
	<title>Celeritas Apps | Contact</title>
	<meta name="description" content="Contact" />
</svelte:head>

<br>
<h1 class="left-h1">Reach out!</h1>
<p class="body-p">Do you have a question or feedback about Clock Suite, Filter Art, or Spiffy Clock? Please do not hesitate. Send the developer an email at:</p>
<a class="email" href="mailto:matt.roberts.is@gmail.com">matt.roberts.is@gmail.com</a>

<style>
  a {
    color: rgb(0, 24, 243);
    text-decoration: none;
    transition: color 0.2s linear;
  }
  .left-h1 {
    text-align: left;
    margin-left: 60px;
    font-size: 50px;
    transition: color 0.2s linear;
  }
  .body-p {
    font-size: 25px;
    line-height: 35px;
    transition: color 0.2s linear;
  }
  .email {
    text-align: left;
    margin-left: 120px;
    font-size: 25px;
    transition: color 0.2s linear;
  }
  @media (prefers-color-scheme: dark) {
  h1, h2, h3, p {
    color: #ffdf00;
  }
  p {
    color: white;
  }
  a {
    color: rgb(61, 229, 255);
  }
}
@media (hover: hover) {
  a:hover {
    text-decoration: underline;
  }
}
</style>