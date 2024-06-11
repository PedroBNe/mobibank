function ItemPage({ params }: { params: { item: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{params.item}</h1>
      <p></p>
    </div>
  );
}

export default ItemPage;
