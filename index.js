function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
  }
saturdayFun("wash my dog")
function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`)
}
mondayWork("work from home")

function wrapAdjective() {
    const part1 = "You are";
    return function () {
      const part2 = "a dedicated programmer";
      return function () {
        console.log(`${part1} ${part2}!`);
      };
    };
  }
  wrapAdjective("*")("a dedicated programmer");