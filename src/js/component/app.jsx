import React from "react";
//create your first component
const Nav = () => {
	return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};

const Home = () => {
  return (
      <div className="p-2 rounded-3 m-0">
      <div className="container py-5">
        <h1 className="display-5">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa pariatur nisi nemo nam repudiandae omnis id excepturi ab veniam animi!</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
  )
}

const Cards = () => {
  return (
<div className="row flex-wrap mx-lg-5 mx-md-3 mx-1 py-5 flex-grow-1">
<div className="col-md-3 col-sm-6">
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body text-center">
    <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
<div className="col-md-3 col-sm-6">
  <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
<div className="card-body text-center">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
  </div>
</div>
<div className="col-md-3 col-sm-6">
  <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
<div className="card-body text-center">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
  </div>
</div>
<div className="col-md-3 col-sm-6">
  <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
<div className="card-body text-center">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary ">Go somewhere</a>
</div>
  </div>
</div>
</div>
  )
}
const Footer = () => {
  return (
    <footer className="footer bg-dark py-3">
      <div className="container text-center bg-dark text-white">
        <p>Copyright &copy; Your website 2023</p>
      </div>
    </footer>
  );
}

const App = () => {
  return (
    <div className="app-container">
      <Nav />
        <Home />
        <Cards />
      <Footer />
    </div>
  );
};

export default App;

