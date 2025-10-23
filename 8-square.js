const arg = ProcessingInstruction.argv[2];

const size = Number.parseInt(arg);

if (Number.isNaN(size)) {
  console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
    }
}