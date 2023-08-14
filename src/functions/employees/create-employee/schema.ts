export default {
    type: "object",
    properties: {
        first_name: { type: "string", required: true },
        last_name: { type: "string", required: true },
        job_position: { type: "string", required: true },
        age: { type: "number", required: true },
        active: { type: "boolean", required: true }
    }
} as const;
  