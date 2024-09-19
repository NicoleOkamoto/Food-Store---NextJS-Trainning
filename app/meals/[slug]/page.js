export default function MealsOptions({ params }) {
  return (
    <main>
      <h1>Meals To Share</h1>
      <p>{params.slug}</p>
    </main>
  );
}