
export interface Review {
  reviewerName: string;
  starRating: string;
  stars: number;
  reviewText: string;
}

export const reviews: Review[] = [
  {
    "reviewerName": "Cassie Piontek",
    "starRating": "5 out of 5 stars",
    "stars": 5,
    "reviewText": "Super cool! Nice work on this. Makes Mealie much easier and way more efficient for desktop users."
  },
  {
    "reviewerName": "Miwha Bonini",
    "starRating": "5 out of 5 stars",
    "stars": 5,
    "reviewText": "Just started using Mealie to organize my recipes. I am always jumping from blogs to recipe sites, and have some favorites, but I often forget which is which. I just rely on memory on things that felt familiar, but it's great that now I have a much simpler way to just save my go-to recipes in an easy to access place. It's such a simple concept but so valuable! Having it as an extension is perfect, a total game changer!"
  },
  {
    "reviewerName": "Evan Greer",
    "starRating": "5 out of 5 stars",
    "stars": 5,
    "reviewText": "This extension adds extension functionality to Mealie, letting me grab recipes directly from websites without jumping through hoops. The UI is clean, and it just works. Would love to see some additional features like bulk import in the future or a paywall jumper. I wonder if you could incorporate AI somehow?\n\nI'd love to see another way to confirm that a recipe is successfully imported. Right now you have to pin the extension to see the green check mark to confirm your import was successful."
  },
  {
    "reviewerName": "Ivori Zvorsky",
    "starRating": "5 out of 5 stars",
    "stars": 5,
    "reviewText": "Makes saving recipes even faster. More tips/instruction on how to initially set up the extension would be helpful but overall awesome tool."
  }
];

export const numberOfUsers = "74";
