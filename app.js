function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adjective = document.getElementById("adjective").value;
    var adverb = document.getElementById("adverb").value;
    
    document.getElementById("sentence").innerHTML = sentences(verb, adverb, person,place, adjective);
}

function sentences(verb, person, place, adjective) {
    sentenceArray = [`Today I had to ${verb} but right in the middle of it ${person} came in with this ${adjective} book and wanted to go to ${place}`, `${person} was in ${place} trying to ${verb}. However, a person left a ${adjective} shirt behind, while crying ${adverb}`, ` Its been a log time since ${person} decided to ${verb} in ${place}. What some people said was that ${person} screamed "This strawberry is ${adjective}!! We thought ${person} went crazy.`]

    ranN = Math.floor(Math.random() * sentenceArray.length)

    return sentenceArray[ranN];
}












































// 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