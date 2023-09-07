import { Handlers, PageProps } from "$fresh/server.ts";


export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url)
    const user = url.searchParams.get("user");
    const password = url.searchParams.get("password");
    const redirect = url.searchParams.get("redirect");
    console.log(redirect);

    if(user=="admin" && password=="password"){    
      console.log(redirect);
        
      return Response.redirect(redirect || "https://open-redirects-example.deno.dev/")
    }
    if(user || password){
      return ctx.render({
        redirect: redirect ||  "https://open-redirects-example.deno.dev/",
        loginerror: true
      });
    }

    return ctx.render({redirect: redirect ||  "https://open-redirects-example.deno.dev/"});
  },
};

export default function Home({ data }: PageProps<{loginerror: boolean, redirect: string}>) {
  if(data.loginerror){
    return (
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/"><img class="mx-auto h-10 w-auto" src="https://th.bing.com/th/id/R.d96a5a1279b694e4c00c46f85c7305f4?rik=Sizu7yxCJ1LlQw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-animals-nature%2f1024%2f22212-monkey-icon.png&ehk=r6Su1PrMnwlOuE0DobFTP5RA7gJN%2fJYDZz5DRMaWI1o%3d&risl=&pid=ImgRaw&r=0" alt="Your Company"/></a>
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="" method="GET">
            <div>
              <label for="user" class="block text-sm font-medium leading-6 text-gray-900">Username address <a class="text-red-600 font-large">Try "admin"</a></label>
              <div class="mt-2">
                <input id="user" name="user" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password <a class="text-red-600 font-large">Try "password"</a></label>
                <div class="text-sm">
                </div>
              </div>
              <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div> <input id="redirect" name="redirect" type="hidden" class="invisible" value={data.redirect}></input>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://th.bing.com/th/id/R.d96a5a1279b694e4c00c46f85c7305f4?rik=Sizu7yxCJ1LlQw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-animals-nature%2f1024%2f22212-monkey-icon.png&ehk=r6Su1PrMnwlOuE0DobFTP5RA7gJN%2fJYDZz5DRMaWI1o%3d&risl=&pid=ImgRaw&r=0" alt="Your Company"/>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="" method="GET">
          <div>
            <label for="user" class="block text-sm font-medium leading-6 text-gray-900">Username address</label>
            <div class="mt-2">
              <input id="user" name="user" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div> <input id="redirect" name="redirect" type="hidden" class="invisible" value={data.redirect}></input>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

      </div>
    </div>
  );
}
