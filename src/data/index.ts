
interface ABC {
  name?: string | number;
  alignment?: string
  style?: React.CSSProperties | undefined
}


interface XYZ {
  content?:string | number
  alignment?:string
  style?:React.CSSProperties | undefined
}

export const data: Array<Array<XYZ | string>> = [
  [
    "velit.aliquam@hotmail.edu",
    {
      content: 'Hassaan', style: { color: "red", }
    },
    "Khan",
    { content: "+92 2239332490",style:{color:"royalblue"} },
    "Islamabad",
    { content: 1 },
  ],

  [
    {content:"arcu.iaculis@yahoo.net",style:{color:"darkorange"}},
    "Usman",
    {content:"Ali"},
    "+92 0239409240",
    "Karachi",
    "02"
  ],

  [
    { content: "odio.aliquam.vulputate@protonmail.couk", alignment: "left" },
    { content: "Ahemd" },
    "Khan",
    "+92 2183763823",
    "Karachi",
    {content:"03", style:{color:"cyan"}},
  ],

  [
    "donec.non.justo@icloud.org",
    { content: "Kamran", style: { color: "green" },alignment:"right" },
    "Ali",
    "+92 9609757567",
    "Quetta",
    "04",
  ],
  [
    "magna.et.ipsum@yahoo.com",
    "Taj",
    "Khan",
    {content:"+92  9230490324",alignment:"right"},
    "Lahore",
    "05",
  ],
];
