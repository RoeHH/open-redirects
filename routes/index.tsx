import { Handlers, PageProps } from "$fresh/server.ts";


export const handler: Handlers<Data> = {
    GET(req, ctx) {
      const url = new URL(req.url)
      return ctx.render({happy: url.searchParams.get("happy")})
    }
}

export default function Home({ data }: PageProps<{happy: boolean | null}>) {
    if(data.happy){
        return (
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <img class="mx-auto h-10 w-auto" src="https://th.bing.com/th/id/R.d96a5a1279b694e4c00c46f85c7305f4?rik=Sizu7yxCJ1LlQw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-animals-nature%2f1024%2f22212-monkey-icon.png&ehk=r6Su1PrMnwlOuE0DobFTP5RA7gJN%2fJYDZz5DRMaWI1o%3d&risl=&pid=ImgRaw&r=0" alt="Your Company"/>
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Monkey</h2>
            </div>
      
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                Once upon a time, in the heart of a lush and sprawling jungle, lived a mischievous little monkey named Max. Max was known throughout the jungle for his insatiable love for bananas. His obsession with bananas was unparalleled, and he would do just about anything to get his hands on one.
    
                One bright and sunny morning, Max awoke to the chirping of birds and the rustling of leaves. He stretched his furry arms, yawned widely, and leaped from branch to branch, swinging effortlessly through the trees. His stomach rumbled, reminding him of his never-ending quest for the perfect banana.
                As Max swung through the dense canopy, he heard a faint rustling sound coming from the nearby bushes. He followed the noise, curiosity piqued, and there it was - the most enormous, golden banana he had ever seen. It glistened in the dappled sunlight, tempting him like no banana ever had before.

Max's heart raced with excitement as he reached out to pluck the glorious banana from its perch. But just as his fingers were about to touch it, a deep, rumbling voice echoed through the jungle, "Stop right there, Max!"

Startled, Max froze in his tracks and turned to see who had spoken. It was Barry, the wise old elephant who had lived in the jungle for generations. Barry had heard tales of Max's banana obsession and decided it was time to teach the young monkey a lesson.

Barry said, "Max, that banana is no ordinary fruit. It's known as the 'Banana of Wisdom,' and it possesses incredible knowledge and power. But it can only be enjoyed by those who have learned to share and be kind."

Max, torn between his insatiable desire for the banana and the wisdom of the old elephant, contemplated his options. He knew that greediness had led him into trouble many times before, but he also knew how delicious that banana must be.

After a moment of deep thought, Max made a difficult decision. He turned to Barry and said, "You're right, Barry. I've been too greedy in the past. I don't want to let my obsession with bananas control me anymore. I will share the Banana of Wisdom with the jungle."

Barry smiled approvingly and nodded his massive head. Max carefully plucked the Banana of Wisdom and carried it back to the heart of the jungle. He called all the animals together, from the tiniest insects to the mightiest creatures, and shared the banana's wisdom with them. It was a lesson in kindness, sharing, and the importance of putting others before oneself.

From that day forward, Max's reputation changed. He was no longer known as the greedy monkey who hoarded bananas but as the wise monkey who had shared the Banana of Wisdom. Max learned that there was more to life than just satisfying his own desires, and he found true happiness in the company and friendship of the other animals in the jungle.

And so, in the heart of the lush and sprawling jungle, Max the monkey and the Banana of Wisdom became legends, teaching generations of animals the value of sharing and kindness, all thanks to a little monkey who learned that sometimes, the most valuable things in life couldn't be measured in bananas alone.
            </div>
          </div>
        )
    }
    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-10 w-auto" src="https://th.bing.com/th/id/R.d96a5a1279b694e4c00c46f85c7305f4?rik=Sizu7yxCJ1LlQw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-animals-nature%2f1024%2f22212-monkey-icon.png&ehk=r6Su1PrMnwlOuE0DobFTP5RA7gJN%2fJYDZz5DRMaWI1o%3d&risl=&pid=ImgRaw&r=0" alt="Your Company"/>
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Monkey</h2>
        </div>
  
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            Once upon a time, in the heart of a lush and sprawling jungle, lived a mischievous little monkey named Max. Max was known throughout the jungle for his insatiable love for bananas. His obsession with bananas was unparalleled, and he would do just about anything to get his hands on one.

            One bright and sunny morning, Max awoke to the chirping of birds and the rustling of leaves. He stretched his furry arms, yawned widely, and leaped from branch to branch, swinging effortlessly through the trees. His stomach rumbled, reminding him of his never-ending quest for the perfect banana.

            As Max swung through the dense canopy... 
            <a href="/login?redirect=https://open-redirects-example.deno.dev/?happy=true" class="font-bold text-blue-700">Login To Read More</a>
        </div>
      </div>
    )
}