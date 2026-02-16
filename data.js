// מפעילים
export const OPERATORS = [
  { id: "op_001", username: "noa",  password: "1234", name: "Noa Levi",   role: "Shift Lead" },
  { id: "op_002", username: "amir", password: "1234", name: "Amir Cohen", role: "Operator" },
  { id: "op_003", username: "dana", password: "1234", name: "Dana Peretz",role: "Operator" },
  { id: "op_004", username: "yossi",password: "1234", name: "Yossi Mizrahi", role: "Supervisor" },
  { id: "op_005", username: "maya", password: "1234", name: "Maya Azulay", role: "Operator" },
];

// סטטוס נקודת הביקורת
export const CHECKPOINT_STATUS = {
  checkpoint: {
    id: "cp_07",
    name: "Checkpoint 07 — North Gate",
    location: "Sector B / Route 4",
    commander: "Lt. A. Ben-David",
  },
  isOpen: true,
  trafficLevel: "medium", 
  lastUpdated: new Date().toISOString(),
};

// הודעות ראשוניות
export const INITIAL_MESSAGES = [
  {
    id: "msg_1001",
    text: "Patrol-2, confirm visual on Route 4 junction.",
    from: { id: "op_001", name: "Noa Levi", role: "Shift Lead" },
    channel: "radio",
    priority: "normal", // "low" | "normal" | "high"
    createdAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
  },
  {
    id: "msg_1002",
    text: "Traffic is building. Switch to single-lane screening for 10 minutes.",
    from: { id: "op_004", name: "Yossi Mizrahi", role: "Supervisor" },
    channel: "system",
    priority: "high",
    createdAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
  },
  {
    id: "msg_1003",
    text: "Patrol-1: check ID mismatch on silver sedan, plate ending 73.",
    from: { id: "op_002", name: "Amir Cohen", role: "Operator" },
    channel: "radio",
    priority: "normal",
    createdAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
  },
  {
    id: "msg_1004",
    text: "All units: weather fog rising. Use extra lighting at the barrier.",
    from: { id: "op_003", name: "Dana Peretz", role: "Operator" },
    channel: "system",
    priority: "normal",
    createdAt: new Date(Date.now() - 1000 * 60 * 6).toISOString(),
  },
  {
    id: "msg_1005",
    text: "Patrol-3 acknowledged. Holding position until further notice.",
    from: { id: "op_005", name: "Maya Azulay", role: "Operator" },
    channel: "radio",
    priority: "low",
    createdAt: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
  },
];