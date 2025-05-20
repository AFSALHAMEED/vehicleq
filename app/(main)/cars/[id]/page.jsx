import React from "react";

const carPage = async ({ params }) => {
  const { id } = await params;
  return <div>carPage</div>;
};

export default carPage;
