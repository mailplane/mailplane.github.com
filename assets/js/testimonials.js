var testimonials = [
    {
        pubDate: "2019-01-03",
        text: "Mailplane 4 knocked it out of the park. Global search is the best feature, hands down!",
        author: "Dave Martorana"
    },
    {
        pubDate: "2019-01-03",
        text: "I love the new Mailplane 4 – especially that I can use security keys to log in. This will keep so many people safer!",
        author: "Andreas Fuchs"
    },
    {
        pubDate: "2019-01-03",
        text: " I run a small business and manage multiple Gmail accounts. Mailplane has been a brilliant addition to my productivity tools. ",
        author: "Michael Karst"
    },
    {
        pubDate: "2019-01-03",
        text: "Exactly what I'd been missing between native apps and having to keep Gmail open in an easily lost/closed tab.",
        author: "Andrew Rollason"
    },
    {
        pubDate: "2019-01-03",
        text: "The first time I bought a Mailplane license was in 2009. Happy to be a customer and supporting the continued development!",
        author: "Johan Lundstroem"
    },
    {
        pubDate: "2019-01-03",
        text: "Let me tell you how much I love Mailplane 4, especially with all of the extensions!",
        author: "Ed Trefzger"
    },
    {
        pubDate: "2019-01-03",
        text: "I've upgraded this morning and all my needs are met nicely. Looks great!",
        author: "Stewart Alpert"
    },
    {
        pubDate: "2019-01-03",
        text: "Very long term user here (Dec 2007) - glad to finally be paying again!",
        author: "Orta Therox"
    },
    {
        pubDate: "2019-01-03",
        text: "Really enjoying your app, and it has made my company's transition to Gmail much smoother.",
        author: "Robert Landa"
    },
    {
        pubDate: "2019-01-03",
        text: "Just Saying, the 'Save Clip' thing is AWESOME!",
        author: "Thomas Kirby"
    },
    {
        pubDate: "2019-01-03",
        text: "I said it before, and I’ll say it again - Mailplane is the best!",
        author: "Kevin OBuckley"
    },
    {
        pubDate: "2019-01-03",
        text: "I'm using the Gmelius extension and I love it!",
        author: "Martijn Jegerings"
    },
    {
        pubDate: "2019-01-03",
        text: "Wow! So excited to dig into the extensions and work on a few! Thanks again for all the great work.",
        author: "Bernd Rennebeck"
    },
    {
        pubDate: "2019-01-21",
        text: "Great product, great support! What else can you ask for?",
        author: "Don Downs"
    },
    {
        pubDate: "2018-08-17",
        text: "Mailplane straddles the web and desktop worlds, filling a need that neither browsers nor native mail clients can fully satisfy.",
        author: "Julio Ojeda-Zapata",
        publication: { name: "Tidbits", href: "https://tidbits.com/2018/08/17/mailplane-goes-chrome-and-adds-features/" }
    },
    {
        pubDate: "2018-08-30",
        text: "If you have a few Gmail accounts, and you are happy with the Gmail interface, check out MailPlane!",
        author: "Bradley Chambers",
        publication: { name: "9to5Mac", href: "https://9to5mac.com/2018/09/30/whats-the-best-email-app-for-mac/" }
    },
    {
        pubDate: "2018-12-03",
        text: "If you prefer the Gmail web interface, MailPlane is a great option!",
        author: "Mike Schmitz",
        publication: { name: "The Sweet Setup", href: "https://thesweetsetup.com/apps/favorite-email-client-os-x/" }
    }
];

function appendTestimonial(ulE, testimonials, idx) {
    var testimonial = testimonials[idx];
    testimonials.splice(idx, 1);

    var authorPE = $("<p class=\"user\">");
    authorPE.text(testimonial.author);
    if(testimonial.publication) {
        authorPE.append("<span>, </span>");
        authorPE.append($("<a>").attr("href", testimonial.publication.href).text(testimonial.publication.name))
    }

    ulE.append(
        $("<li>")
            .append($("<p>").text(testimonial.text))
            .append(authorPE)
    );
}

$(function() {
    var ulE = $("<ul>");

    var customerTestimonials = testimonials.filter(function(testimonial) { return !testimonial.publication });
    while(ulE.children("li").length < 2) {
        appendTestimonial(
            ulE,
            customerTestimonials,
            Math.random() * customerTestimonials.length | 0
        );
    }

    var publicationTestimonials = testimonials.filter(function(testimonial) { return testimonial.publication });
    appendTestimonial(
        ulE,
        publicationTestimonials,
        Math.random() * publicationTestimonials.length | 0
    );

    $("section.testimonials").append(ulE);
});
