import Parse from "parse";

// Parse model for the "Sign" class
const Sign = Parse.Object.extend("Sign");

// READ: fetch all signs, shaped like the old signData.json entries
export async function getAllSigns() {
  const query = new Parse.Query(Sign);
  query.ascending("label");
  query.limit(100);
  const results = await query.find();
  return results.map((r) => ({
    id: r.id,
    label: r.get("label"),
    pixels: r.get("pixels"),
  }));
}

// CREATE: add a new sign
export async function createSign(label, pixels) {
  const sign = new Sign();
  sign.set("label", label);
  sign.set("pixels", pixels);
  return sign.save();
}

// UPDATE: change fields on an existing sign
export async function updateSign(id, changes) {
  const sign = await new Parse.Query(Sign).get(id);
  Object.entries(changes).forEach(([key, value]) => sign.set(key, value));
  return sign.save();
}

// DELETE: remove a sign
export async function deleteSign(id) {
  const sign = await new Parse.Query(Sign).get(id);
  return sign.destroy();
}