function Home() {
  const user = { displayName: 'Tori' };
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        padding: '30px',
        maxWidth: '414px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
    </div>
  );
}

export default Home;
