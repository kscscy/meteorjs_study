// check empty string
NotEmptyString = Match.Where((x)=>{
  check(x, String);
  return x.length > 0;
});

// check valid email
EmailString = Match.Where((x) => {
  check(x, String);
  return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(x);
});

// check phone number
PhoneString = Match.Where((x) => {
  check(x, String);
  return /^\d{3}-\d{3,4}-\d{4}$/.test(x);
});

BirthDayString = Match.Where((x) => {
  check(x, String);
  return /^(19)[0-9][0-9]|20\d{2}\-(0[0-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(x);
});
