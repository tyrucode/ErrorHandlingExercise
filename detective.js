function mysteryOperation() {
    const outcome = Math.random(); // Generates a random number between 0 and 1.

    if (outcome < 0.5) {
        console.log("The operation is completed successfully!");
    }
    else {
        throw new Error("The operation is failed mysteriously!");
    }
}
const numberOfOperations = 20;
const daysOffSuccess = 13;
const daysOffFailure = 1;
const daysForAttendance = 3;

let daysEarned = 0;

for (let i = 0; i < numberOfOperations; i++) {
    try {
        mysteryOperation();
        daysEarned += daysOffSuccess;
    }
    catch (err) {
        daysEarned += daysOffFailure;
    }
    finally {
        daysEarned += daysForAttendance;
    }
}
console.log("You have earned ${daysEarned} days off!");


