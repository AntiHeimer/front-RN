export default async function PostDiagnosisAnswer({token, diagnosisAnswer}) {
  const result = await fetch(`${process.env.API}/diagnosis/anser`, {
    method: 'POST',
  });
}
