// creating users log 
let user = [
    {
        name: "Albert Einstein",
        pic: "https://i.pinimg.com/736x/11/7f/f6/117ff640513bd77fe831482406918092.jpg",
        bio: "Developed the theory of relativity and made major contributions to modern physics. He was awarded the 1921 Nobel Prize in Physics for his explanation of the photoelectric effect."
    },
    {
        name: "Isaac Newton",
        pic: "https://i.pinimg.com/736x/12/4c/3d/124c3dabb93876c6a45ce205cf681e32.jpg",
        bio: "Developed the laws of motion and universal gravitation, laying the foundation for classical mechanics and making major contributions to mathematics and optics."
    },
    {
        name: "Marie Curie",
        pic: "https://i.pinimg.com/1200x/b1/d2/bf/b1d2bf2a82219ac7c67da409a933f8a5.jpg",
        bio: "Pioneered research on radioactivity and became the first woman to win a Nobel Prize. She received Nobel Prizes in both Physics and Chemistry."
    },
    {
        name: "Nikola Tesla",
        pic: "https://i.pinimg.com/736x/1f/a3/ad/1fa3ad491318b37605b02e3a7b14660d.jpg",
        bio: "Inventor and electrical engineer known for his work on alternating current, induction motors, transformers, and the development of modern electrical systems."
    },
    {
        name: "Charles Darwin",
        pic: "https://i.pinimg.com/736x/de/52/27/de522753ffda0487a5ac10f127edbb97.jpg",
        bio: "Developed the theory of evolution by natural selection, fundamentally changing the scientific understanding of how species change over generations."
    },
    {
        name: "Galileo Galilei",
        pic: "https://i.pinimg.com/1200x/d1/a4/36/d1a436d1a2989b43db6f9d708d9578e3.jpg",
        bio: "Italian astronomer and physicist who made major contributions to observational astronomy and strongly supported the heliocentric model of the solar system."
    },
    {
        name: "Stephen Hawking",
        pic: "https://i.pinimg.com/736x/18/59/b7/1859b75643a11baae5c947b11474103f.jpg",
        bio: "Theoretical physicist known for his work on black holes, cosmology, and Hawking radiation. He also wrote popular books explaining complex scientific ideas."
    },
    {
        name: "Leonardo da Vinci",
        pic: "https://i.pinimg.com/736x/a2/06/24/a2062485beae546ed0c61e4fa6163bd7.jpg",
        bio: "Italian polymath known for his work in art, anatomy, engineering, mathematics, and scientific observation. His notebooks contain ideas far ahead of his time."
    },
    {
        name: "Alan Turing",
        pic: "https://i.pinimg.com/736x/33/dc/de/33dcde8fcae0ff82426ab6bf640f10a7.jpg",
        bio: "British mathematician and computer scientist who helped establish the foundations of computer science and made important contributions to codebreaking during World War II."
    },
    {
        name: "Thomas Edison",
        pic: "https://i.pinimg.com/736x/bf/3c/3e/bf3c3e3833ac86922ed2ab8fd79fec28.jpg",
        bio: "American inventor and businessman who developed and commercialized numerous technologies, including practical electric lighting and the phonograph."
    }
];

// displaying users
function ShowUsers(arr){
    arr.forEach(user => {

        // card main div 
        const card=document.createElement("div");
        card.classList.add("card");

        // creating image
        const img=document.createElement("img");
        img.src= user.pic;
        img.classList.add("bg-img");

        //  creating blurred effect
        const blurred=document.createElement("div");
        blurred.style.backgroundImage=`url(${user.pic}`;
        blurred.classList.add("blurred-layer");

        // creating content 
        const content=document.createElement("div");
        content.classList.add("content");

        // creating h3 & p
        const h3=document.createElement("h3");
        h3.textContent=user.name;

        const p=document.createElement("p");
        p.textContent=user.bio;

        // built the structure 
        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurred);
        card.appendChild(content);

        // adding card to the body
        document.querySelector(".structure").appendChild(card);
    });
}

ShowUsers(user);


const inp=document.querySelector(".inp");
inp.addEventListener("input",function(){
    let displayuser=user.filter((dets)=>{
        return dets.name.startsWith(inp.value);
    })
    
    document.querySelector(".structure").innerHTML="";
    ShowUsers(displayuser);
});




// - add case sensetive search
// - add delayed results dom events bounce
// - make it for atleast 100 cards 
// - make cards quality or css even better 
// - overflow hidden try it 
// - cards should be on second row when line is full 
