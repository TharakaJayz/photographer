/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        navcolor:"rgba(0,0,0,0.8)",
        primary:"rgba(145, 173, 142, 1)",
        primary_light1:"rgba(232,235,235,1)",
        primary_light2:"rgba(238, 241, 238)",
        primary_light3:"rgb(63, 83, 65 ,0.5)",
        primary_light4:"rgb(138, 156, 136 ,0.5)",
        service_svg_bg:"#4B5959",
      },
      transitionProperty:{
        height: 'height',
      },

      screens: {
        "2xl_": { max: "1535px" },

        xl_: { max: "1279px" },
        xl2_: { max: "1150px" },

        lg_: { max: "1023px" },

        lg2_: { max: "920px" },

        md_: { max: "767px" },

        sm_: { max: "639px" },
      },
      spacing: {
        px1: "1px",
        px2: "1.5px",
        px3: "3px",
        px200: "200px",
        vh1: "1vh",
        vh2: "2vh",
        vh3: "3vh",
        vh4: "4vh",
        vh5: "5vh",
        vh6: "6vh",
        vh7: "7vh",
        vh8: "8vh",
        vh9: "9vh",
        vh10: "10vh",
        vh11: "11vh",
        vh12: "12vh",
        vh13: "13vh",
        vh14: "14vh",
        vh15: "15vh",
        vh16: "16vh",
        vh17: "17vh",
        vh18: "18vh",
        vh19: "19vh",
        vh20: "20vh",
        vh21: "21vh",
        vh22: "22vh",
        vh23: "23vh",
        vh24: "24vh",
        vh25: "25vh",
        vh26: "26vh",
        vh27: "27vh",
        vh28: "28vh",
        vh29: "29vh",
        vh30: "30vh",
        vh31: "31vh",
        vh32: "32vh",
        vh33: "33vh",
        vh34: "34vh",
        vh35: "35vh",
        vh36: "36vh",
        vh37: "37vh",
        vh38: "38vh",
        vh39: "39vh",
        vh40: "40vh",
        vh41: "41vh",
        vh42: "42vh",
        vh43: "43vh",
        vh44: "44vh",
        vh45: "45vh",
        vh46: "46vh",
        vh47: "47vh",
        vh48: "48vh",
        vh49: "49vh",
        vh50: "50vh",
        vh51: "51vh",
        vh52: "52vh",
        vh53: "53vh",
        vh54: "54vh",
        vh55: "55vh",
        vh56: "56vh",
        vh57: "57vh",
        vh58: "58vh",
        vh59: "59vh",
        vh60: "60vh",
        vh61: "61vh",
        vh62: "62vh",
        vh63: "63vh",
        vh64: "64vh",
        vh65: "65vh",
        vh66: "66vh",
        vh67: "67vh",
        vh68: "68vh",
        vh69: "69vh",
        vh70: "70vh",
        vh71: "71vh",
        vh72: "72vh",
        vh73: "73vh",
        vh74: "74vh",
        vh75: "75vh",
        vh76: "76vh",
        vh77: "77vh",
        vh78: "78vh",
        vh79: "79vh",
        vh80: "80vh",
        vh81: "81vh",
        vh82: "82vh",
        vh83: "83vh",
        vh84: "84vh",
        vh85: "85vh",
        vh86: "86vh",
        vh87: "87vh",
        vh88: "88vh",
        vh89: "89vh",
        vh90: "90vh",
        vh91: "91vh",
        vh92: "92vh",
        vh93: "93vh",
        vh94: "94vh",
        vh95: "95vh",
        vh96: "96vh",
        vh97: "97vh",
        vh98: "98vh",
        vh99: "99vh",
        vh100: "100vh",
        vw1: "1vw",
        vw2: "2vw",
        vw3: "3vw",
        vw4: "4vw",
        vw5: "5vw",
        vw6: "6vw",
        vw7: "7vw",
        vw8: "8vw",
        vw9: "9vw",
        vw10: "10vw",
        vw11: "11vw",
        vw12: "12vw",
        vw13: "13vw",
        vw14: "14vw",
        vw15: "15vw",
        vw16: "16vw",
        vw17: "17vw",
        vw18: "18vw",
        vw19: "19vw",
        vw20: "20vw",
        vw21: "21vw",
        vw22: "22vw",
        vw23: "23vw",
        vw24: "24vw",
        vw25: "25vw",
        vw26: "26vw",
        vw27: "27vw",
        vw28: "28vw",
        vw29: "29vw",
        vw30: "30vw",
        vw31: "31vw",
        vw32: "32vw",
        vw33: "33vw",
        vw34: "34vw",
        vw35: "35vw",
        vw36: "36vw",
        vw37: "37vw",
        vw38: "38vw",
        vw39: "39vw",
        vw40: "40vw",
        vw41: "41vw",
        vw42: "42vw",
        vw43: "43vw",
        vw44: "44vw",
        vw45: "45vw",
        vw46: "46vw",
        vw47: "47vw",
        vw48: "48vw",
        vw49: "49vw",
        vw50: "50vw",
        vw51: "51vw",
        vw52: "52vw",
        vw53: "53vw",
        vw54: "54vw",
        vw55: "55vw",
        vw56: "56vw",
        vw57: "57vw",
        vw58: "58vw",
        vw59: "59vw",
        vw60: "60vw",
        vw61: "61vw",
        vw62: "62vw",
        vw63: "63vw",
        vw64: "64vw",
        vw65: "65vw",
        vw66: "66vw",
        vw67: "67vw",
        vw68: "68vw",
        vw69: "69vw",
        vw70: "70vw",
        vw71: "71vw",
        vw72: "72vw",
        vw73: "73vw",
        vw74: "74vw",
        vw75: "75vw",
        vw76: "76vw",
        vw77: "77vw",
        vw78: "78vw",
        vw79: "79vw",
        vw80: "80vw",
        vw81: "81vw",
        vw82: "82vw",
        vw83: "83vw",
        vw84: "84vw",
        vw85: "85vw",
        vw86: "86vw",
        vw87: "87vw",
        vw88: "88vw",
        vw89: "89vw",
        vw90: "90vw",
        vw91: "91vw",
        vw92: "92vw",
        vw93: "93vw",
        vw94: "94vw",
        vw95: "95vw",
        vw96: "96vw",
        vw97: "97vw",
        vw98: "98vw",
        vw99: "99vw",
        vw100: "100vw",
        p1: "1%",
  p2: "2%",
  p3: "3%",
  p4: "4%",
  p5: "5%",
  p6: "6%",
  p7: "7%",
  p8: "8%",
  p9: "9%",
  p10: "10%",
  p11: "11%",
  p12: "12%",
  p13: "13%",
  p14: "14%",
  p15: "15%",
  p16: "16%",
  p17: "17%",
  p18: "18%",
  p19: "19%",
  p20: "20%",
  p21: "21%",
  p22: "22%",
  p23: "23%",
  p24: "24%",
  p25: "25%",
  p26: "26%",
  p27: "27%",
  p28: "28%",
  p29: "29%",
  p30: "30%",
  p31: "31%",
  p32: "32%",
  p33: "33%",
  p34: "34%",
  p35: "35%",
  p36: "36%",
  p37: "37%",
  p38: "38%",
  p39: "39%",
  p40: "40%",
  p41: "41%",
  p42: "42%",
  p43: "43%",
  p44: "44%",
  p45: "45%",
  p46: "46%",
  p47: "47%",
  p48: "48%",
  p49: "49%",
  p50: "50%",
  p51: "51%",
  p52: "52%",
  p53: "53%",
  p54: "54%",
  p55: "55%",
  p56: "56%",
  p57: "57%",
  p58: "58%",
  p59: "59%",
  p60: "60%",
  p61: "61%",
  p62: "62%",
  p63: "63%",
  p64: "64%",
  p65: "65%",
  p66: "66%",
  p67: "67%",
  p68: "68%",
  p69: "69%",
  p70: "70%",
  p71: "71%",
  p72: "72%",
  p73: "73%",
  p74: "74%",
  p75: "75%",
  p76: "76%",
  p77: "77%",
  p78: "78%",
  p79: "79%",
  p80: "80%",
  p81: "81%",
  p82: "82%",
  p83: "83%",
  p84: "84%",
  p85: "85%",
  p86: "86%",
  p87: "87%",
  p88: "88%",
  p89: "89%",
  p90: "90%",
  p91: "91%",
  p92: "92%",
  p93: "93%",
  p94: "94%",
  p95: "95%",
  p96: "96%",
  p97: "97%",
  p98: "98%",
  p99: "99%",
  p100: "100%"
      }  ,    
    },
  },
  plugins: [],
}

