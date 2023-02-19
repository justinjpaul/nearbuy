import { mutation } from './_generated/server';

export default mutation(async ({ db }, body) => {
  console.log(body);
  await db.insert('listings', body);
});
