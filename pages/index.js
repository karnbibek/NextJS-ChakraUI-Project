import Card from "./Components/Card"

const data = {
  button: "Funding",
  name: "Ralph Edwards",
  time: "3h ago",
  avatarName: "Bibek",
  link: "https://bit.ly/dan-abramov",
  p1: "Velit ut ultrices quis viverra eu, ultricies nulla at nec. Ut diam venenatis egestas massa vulputate nam. Pretium eros, imperdiet odio sit. Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut.",
  p2: "Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam. Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in.",
  formText: "How can you help with this Request?",
  inputPlaceHolder: "Type Here..."
}

export default function Home() {
  return <Card button={data.button} name={data.name} avatarName={data.avatarName} link={data.link} time={data.time} p1={data.p1} p2={data.p2} formText={data.formText} inputPlaceHolder={data.inputPlaceHolder} />
}
