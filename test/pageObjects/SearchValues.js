import Site from './mySite.js'

class SearchGo extends Site {
  static getSearchQueries() {
    return [
      {
        query: "Cutting Board",
        expectedUrl: 'https://www.qualtry.com/search?type=product&q=Cutting+Board',
        waitForElement: '.hr--medium'
      },
      {
        query: "@Cutting*Board",
        expectedUrl: 'https://www.qualtry.com/search?type=product&q=%40Cutting*Board',
        waitForElement: '.hr--medium'
      },
      {
        query: "Stocking3",
        expectedUrl: 'https://www.qualtry.com/search?type=product&q=Stocking3',
        waitForElement: '.hr--medium'
      },
      {
        query: "#&*(@($",
        expectedUrl: 'https://www.qualtry.com/search?type=product&q=%23%26*%28%40%28%24',
        waitForElement: '.hr--medium'
      },
      {
        query: "97459187358913847",
        expectedUrl: 'https://www.qualtry.com/search?type=product&q=97459187358913847',
        waitForElement: '.hr--medium'
      },
      {
        query: "Ω",
        expectedUrl: 'https://www.qualtry.com/search?type=product&q=%CE%A9',
        waitForElement: '.hr--medium'
      },
      {
        query: "Space Station",
        expectedUrl: 'https://www.qualtry.com/search?type=product&q=Space+Station',
        waitForElement: '.hr--medium'
      },
      {
        query: 
            "The quick brown fox jumps over the lazy dog. " + 
            "The lazy dog rests in the sun. " + 
            "The fox is quick and agile. " + 
            "The dog is slow and sleepy. " + 
            "The fox hunts for food in the forest. " + 
            "The dog dreams of chasing the fox. " + 
            "The forest is filled with trees and animals. " + 
            "The sun shines brightly in the clear sky. " + 
            "The clouds drift lazily overhead. " + 
            "The wind rustles the leaves of the trees. " + 
            "The birds chirp merrily in the branches. " + 
            "The squirrels scurry through the underbrush. " + 
            "The deer graze peacefully in the meadow. " + 
            "The rabbit hops from one hiding spot to another. " + 
            "The snake slithers silently through the grass. " + 
            "The butterfly flutters from flower to flower. " + 
            "The bees buzz as they collect nectar. " + 
            "The pond is home to many fish and frogs. " + 
            "The dragonflies skim the surface of the water. " + 
            "The lilies bloom in the shallow waters. " + 
            "The cattails sway in the gentle breeze.",
        expectedUrl: "https://www.qualtry.com/search?type=product&q=The+quick+brown+fox+jumps+over+the+lazy+dog." +
         "+The+lazy+dog+rests+in+the+sun.+The+fox+is+quick+and+agile.+The+dog+is+slow+and+sleepy.+The+fox+hunts+for+food+in+the+forest." +
         "+The+dog+dreams+of+chasing+the+fox.+The+forest+is+filled+with+trees+and+animals.+The+sun+shines+brightly+in+the+clear+sky.+The+clouds" +
         "+drift+lazily+overhead.+The+wind+rustles+the+leaves+of+the+trees.+The+birds+chirp+merrily+in+the+branches.+The+squirrels+scurry+through+" +
         "the+underbrush.+The+deer+graze+peacefully+in+the+meadow.+The+rabbit+hops+from+one+hiding+spot+to+another.+The+snake+slithers+silently+through+" +
         "the+grass.+The+butterfly+flutters+from+flower+to+flower.+The+bees+buzz+as+they+collect+nectar.+The+pond+is+home+to+many+fish+and+frogs.+The+dragonflies" +
         "+skim+the+surface+of+the+water.+The+lilies+bloom+in+the+shallow+waters.+The+cattails+sway+in+the+gentle+breeze.",
              waitForElement: '.hr--medium'
    },
    {
        query: 
            "The sun shines brightly in the clear blue sky, casting a warm glow over the lush, verdant landscape. " + 
            "A gentle breeze rustles the leaves of the towering oak trees, their branches reaching up towards the heavens. " + 
            "In the distance, a river winds its way through the rolling hills, its surface sparkling like diamonds. " + 
            "Along the banks of the river, a family of geese glides effortlessly, their graceful necks arched as they search for food. " + 
            "Nearby, a group of children play in the shallow waters, their laughter echoing through the tranquil scene. " + 
            "In the meadow, a herd of deer graze peacefully, their large, expressive eyes scanning the horizon for any sign of danger. " + 
            "A curious rabbit emerges from its burrow, its nose twitching as it sniffs the air, searching for the sweet scent of clover. " + 
            "Overhead, a flock of birds soar on the updrafts, their wings outstretched as they effortlessly navigate the currents of the wind. " + 
            "A lone hawk circles high above, its keen eyes scanning the ground below for any sign of prey. " + 
            "At the edge of the forest, a fox emerges from the underbrush, its russet fur gleaming in the sunlight. " + 
            "It pauses for a moment, its ears perked forward, before disappearing back into the shadows of the trees. " + 
            "In the heart of the forest, a squirrel scurries along the branch of a towering pine tree, its bushy tail twitching as it gathers acorns for the long winter ahead. " + 
            "A chipmunk darts across the forest floor, its striped back a blur of motion as it darts from one hiding spot to another. " + 
            "Deeper in the forest, the sound of a stream can be heard, its gentle burbling a soothing melody. " + 
            "A family of otters frolics in the cool, clear water, their sleek bodies gliding effortlessly through the current. " + 
            "Along the banks of the stream, a cluster of wildflowers bloom, their petals a riot of color against the verdant backdrop of the foliage. " + 
            "A butterfly flutters from blossom to blossom, its delicate wings a kaleidoscope of hues. " + 
            "In a nearby meadow, a field of tall grass sways in the breeze, its golden tips undulating like waves on the surface of the ocean. " + 
            "A grasshopper leaps from one blade of grass to another, its long legs propelling it forward with ease. " + 
            "At the edge of the meadow, a small pond glistens in the sunlight, its surface a mirror reflecting the clouds above. " + 
            "A family of ducks glides across the water, their webbed feet propelling them forward with each gentle kick.",
        expectedUrl: "https://www.qualtry.com/search?type=product&q=The+sun+shines+brightly+in+the+clear+blue+sky%2C+casting+a+warm+glow+over+the+lush%2C+verdant+landscape." +
"+A+gentle+breeze+rustles+the+leaves+of+the+towering+oak+trees%2C+their+branches+reaching+up+towards+the+heavens.+In+the+distance%2C+a+river+" +
"winds+its+way+through+the+rolling+hills%2C+its+surface+sparkling+like+diamonds.+Along+the+banks+of+the+river%2C+a+family+of+geese+glides+" +
"effortlessly%2C+their+graceful+necks+arched+as+they+search+for+food.+Nearby%2C+a+group+of+children+play+in+the+shallow+waters%2C+their+" +
"laughter+echoing+through+the+tranquil+scene.+In+the+meadow%2C+a+herd+of+deer+graze+peacefully%2C+their+large%2C+expressive+eyes+scanning+" +
"the+horizon+for+any+sign+of+danger.+A+curious+rabbit+emerges+from+its+burrow%2C+its+nose+twitching+as+it+sniffs+the+air%2C+searching+" +
"for+the+sweet+scent+of+clover.+Overhead%2C+a+flock+of+birds+soar+on+the+updrafts%2C+their+wings+outstretched+as+they+effortlessly+navigate+" +
"the+currents+of+the+wind.+A+lone+hawk+circles+high+above%2C+its+keen+eyes+scanning+the+ground+below+for+any+sign+of+prey.+At+the+edge+" +
"of+the+forest%2C+a+fox+emerges+from+the+underbrush%2C+its+russet+fur+gleaming+in+the+sunlight.+It+pauses+for+a+moment%2C+its+ears+" +
"perked+forward%2C+before+disappearing+back+into+the+shadows+of+the+trees.+In+the+heart+of+the+forest%2C+a+squirrel+scurries+along+the+" +
"branch+of+a+towering+pine+tree%2C+its+bushy+tail+twitching+as+it+gathers+acorns+for+the+long+winter+ahead.+A+chipmunk+darts+across+the+" +
"forest+floor%2C+its+striped+back+a+blur+of+motion+as+it+darts+from+one+hiding+spot+to+another.+Deeper+in+the+forest%2C+the+sound+of+a+" +
"stream+can+be+heard%2C+its+gentle+burbling+a+soothing+melody.+A+family+of+otters+frolics+in+the+cool%2C+clear+water%2C+their+sleek+" +
"bodies+gliding+effortlessly+through+the+current.+Along+the+banks+of+the+stream%2C+a+cluster+of+wildflowers+bloom%2C+their+petals+a+riot+" +
"of+color+against+the+verdant+backdrop+of+the+foliage.+A+butterfly+flutters+from+blossom+to+blossom%2C+its+delicate+wings+a+kaleidoscope+" +
"of+hues.+In+a+nearby+meadow%2C+a+field+of+tall+grass+sways+in+the+breeze%2C+its+golden+tips+undulating+like+waves+on+the+surface+of+" +
"the+ocean.+A+grasshopper+leaps+from+one+blade+of+grass+to+another%2C+its+long+legs+propelling+it+forward+with+ease.+At+the+edge+of+the+" +
"meadow%2C+a+small+pond+glistens+in+the+sunlight%2C+its+surface+a+mirror+reflecting+the+clouds+above.+A+family+of+ducks+glides+across+" +
"the+water%2C+their+webbed+feet+propelling+them+forward+with+each+gentle+kick.",
                waitForElement: '.hr--medium'
    },
    {
        query: "apple banana orange grape cherry peach pear pineapple strawberry watermelon blueberry raspberry " +
              "blackberries plum apricot kiwi mango coconut papaya lime lemon tangerine pomegranate cantaloupe honeydew melon " +
              "dragonfruit passionfruit lychee fig nectarine starfruit persimmon guava date tamarind avocado almond cashew pistachio " +
              "walnut hazelnut macadamia peanut sunflower sesame pumpkin chia flax quinoa wheat barley oats rice corn millet " +
              "spelt rye sorghum buckwheat amaranth bulgur couscous lentil chickpea kidney bean black bean pinto bean navy bean " +
              "lima bean garbanzo bean fava bean mung bean edamame peas soybeans chickpea tofu tempeh seitan quinoa rice noodles " +
              "soba udon spaghetti penne fusilli ravioli lasagna gnocchi macaroni farfalle rigatoni tortellini linguine couscous farro " +
              "barley bulgur wheat couscous buckwheat soba spaghetti rice noodles eggplant zucchini squash cucumber spinach kale " +
              "lettuce arugula collard greens swiss chard mustard greens dandelion greens bok choy napa cabbage cabbage celery bell " +
              "pepper tomato onion garlic ginger shallot leeks green onion scallion chives parsley cilantro basil rosemary thyme oregano " +
              "dill sage tarragon marjoram mint cumin coriander turmeric paprika chili powder cinnamon nutmeg cardamom cloves allspice " +
              "cumin fennel mustard seeds poppy seeds sesame seeds black sesame seeds sunflower seeds flax seeds chia seeds hemp " +
              "seeds vanilla nutmeg cayenne red pepper flakes black pepper white pepper cayenne chili flakes smoked paprika ground " +
              "ginger garlic powder onion powder turmeric powder salt kosher salt sea salt Himalayan pink salt garlic salt onion " +
              "salt truffle salt celery salt kosher salt lime zest lemon zest orange zest ginger powder garlic granules chili " +
              "flakes smoked salt baking soda baking powder cornstarch tapioca flour arrowroot powder xanthan gum guar gum pectin " +
              "agar agar gelatin agar thickener arrowroot pectin guar gum carrageenan acacia gum cellulose gum monoglycerides sodium " +
              "citrate guar gum calcium propionate ascorbic acid xanthan gum citric acid yeast sourdough yeast active yeast rapid " +
              "rise yeast dry yeast baking yeast quick rise yeast baker's yeast bread flour all-purpose flour self-raising flour " +
              "cake flour pastry flour whole wheat flour rye flour gluten-free flour almond flour coconut flour rice flour oat " +
              "flour sorghum flour teff flour tapioca flour corn flour potato flour chickpea flour millet flour buckwheat flour " +
              "quinoa flour spelt flour nut flours gluten-free flour blends wheat germ oatmeal whole grain oats rolled oats " +
              "steel-cut oats instant oats oat bran quinoa millet bulgur barley rice jasmine rice basmati rice brown rice wild " +
              "rice sushi rice black rice white rice Arborio rice short grain rice long grain rice sushi rice farro rice " +
              "white rice steamed rice cauliflower rice risotto pilaf fried rice rice pudding sweet rice sticky rice sushi rolls " +
              "rice cakes rice crackers brown rice crisps rice noodles glass noodles rice paper rice sheets instant noodles " +
              "ramen noodles udon noodles soba noodles spaghetti linguine egg noodles lasagna noodles fettuccine macaroni penne " +
              "farfalle fusilli rigatoni gnocchi ravioli tortellini dumplings wonton baozi spring rolls egg rolls gyoza pierogi " +
              "dim sum empanada potsticker samosa pastry croissant baguette muffin brioche scone pita naan challah bagel focaccia " +
              "ciabatta tortilla crepe pancake waffle waffle fries hashbrowns latkes latke hash browns croissant croissant rolls buns " +
              "hot dog rolls sandwich bread loaf brioche dinner rolls dinner bread pita bread flatbread sourdough bread gluten-free " +
              "bread cornbread banana bread zucchini bread pumpkin bread challah bread cinnamon rolls garlic bread breadsticks " +
              "bread crumbs breadcrumbs breadcrumbs croutons muffin mixes cake mixes pancake mix pizza dough cookie dough pie " +
              "crust dough danish dough puff pastry filo dough croissant dough croissant recipe cake flour pastry flour almond " +
              "flour yeast dough chocolate cake vanilla cake lemon cake orange cake carrot cake red velvet cake marble " +
              "cake pound cake angel food cake chiffon cake cheesecake coffee cake shortbread cookies sugar cookies oatmeal " +
              "cookies chocolate chip cookies peanut butter cookies snickerdoodle cookies gingerbread cookies macaron meringue " +
              "biscotti fortune cookies fig cookies sandwich cookies whoopie pies ice cream cake cake pops pudding pie tart " +
              "cheesecake pies pumpkin pie apple pie cherry pie pecan pie lemon meringue pie key lime pie coconut cream " +
              "pie banana cream pie sweet potato pie peach pie blueberry pie chocolate pie strawberry pie lemon pie peach " +
              "cobbler cobbler crumble crumble pie turnovers hand pies galette almond cake flourless chocolate cake tortes " +
              "cake squares brownie blondies fudge fondant ganache icing frosting buttercream frosting cream cheese frosting " +
              "ganache icing chocolate ganache ganache sauce whipped cream whipped topping fondant edible flowers sprinkles " +
              "colored sugar chocolate chips butterscotch chips toffee bits marshmallows mini marshmallows rainbow sprinkles " +
              "nonpareils candy melts chocolate bark chocolate truffles praline caramels hard candy lollipops chocolate-covered " +
              "strawberries chocolate fondue chocolate fountains fruit fondue caramel sauce hot fudge butterscotch sauce whipped " +
              "cream marshmallow fluff syrup agave syrup honey maple syrup chocolate syrup buttermilk evaporated milk condensed " +
              "milk almond milk coconut milk soy milk oat milk rice milk hemp milk cashew milk chocolate milk milkshakes " +
              "smoothies smoothie bowls fruit salad vegetable salad quinoa salad pasta salad potato salad bean salad coleslaw " +
              "cucumber salad tomato salad spinach salad arugula salad green salad egg salad chicken salad tuna salad " +
              "pasta salad macaroni salad rice salad beet salad kale salad arugula salad broccoli salad fruit salad with " +
              "dressing veggie tray veggie platter dip guacamole salsa hummus tzatziki baba ganoush spinach artichoke dip " +
              "ranch dip sour cream dip French onion dip buffalo chicken dip queso dip cheese fondue beer cheese fondue " +
              "spinach artichoke dip onion dip guacamole salsa tortilla chips potato chips pita chips pita bread crackers " +
              "pretzels popcorn nuts mixed nuts cashews almonds pistachios peanuts walnuts hazelnuts pecans almonds macadamia " +
              "peanuts sunflower seeds sesame seeds flax seeds hemp seeds chia seeds pumpkin seeds trail mix energy " +
              "bars granola bars protein bars fruit leather beef jerky turkey jerky chicken jerky dry sausages dried " +
              "fruit raisins dried apricots dried prunes dried figs dried cranberries dried cherries banana chips apple " +
              "chips veggie chips kale chips beet chips potato chips chips tortilla chips pretzels candy candy bars " +
              "chocolate bars candy cane mints chewing gum hard candy jelly beans gummies licorice marshmallows jelly drops " +
              "lollipops taffy gumdrops licorice whips chocolate truffles praline truffles chocolate-covered nuts chocolate-covered " +
              "fruits nut brittles fudge sweet treats desserts confections praline toffee honeycomb candy caramelized nuts " +
              "chocolate mousse ice cream sherbet sorbet frozen yogurt custard gelato sherbet parfait frozen treats sherbet " +
              "popsicles ice lollies gelato pops popsicles frozen fruits sorbet dairy-free ice cream coconut milk ice cream " +
              "chocolate chip ice cream vanilla ice cream strawberry ice cream mint chocolate chip ice cream butter pecan " +
              "ice cream pistachio ice cream rocky road ice cream cookies and cream ice cream salted caramel ice cream " +
              "coffee ice cream birthday cake ice cream strawberry sorbet raspberry sorbet lemon sorbet pina colada sorbet " +
              "tropical fruit sorbet fruit bars frozen smoothies fruit juice vegetable juice smoothies drinks tea coffee herbal " +
              "tea green tea black tea white tea chai tea fruit tea iced tea milkshake frappuccino lemonade iced coffee iced " +
              "tea iced drinks sparkling water mineral water club soda flavored water coconut water soda tonic water ginger " +
              "ale root beer cola lemonade limeade iced green tea iced herbal tea cranberry juice apple juice carrot juice " +
              "orange juice pineapple juice mango juice berry juice beet juice pomegranate juice cucumber juice lemonade cranberry " +
              "limeade coconut water sparkling water orange soda fruit punch lemonade sparkling lemonade sparkling iced tea fruit " +
              "soda energy drinks sports drinks kombucha protein shakes meal replacement drinks whey protein shakes plant-based " +
              "protein shakes protein smoothies electrolyte drinks sparkling water flavored water iced coffee coffee latte espresso " +
              "cappuccino mocha iced espresso black coffee cold brew herbal tea coffee with milk hot chocolate drinks hot cocoa " +
              "drink packets iced tea fruit smoothies veggie smoothies milkshakes shakes frosty whipped cream bubble tea iced bubble " +
              "tea smoothie bowls granola parfait granola parfait yogurt parfait fruit parfait drinkable yogurt yogurt cups dairy-free " +
              "yogurt chia pudding matcha latte chai latte iced lattes frappes iced frappuccino matcha frappuccino smoothie bowls " +
              "granola parfait yogurt parfait acai bowls energy drinks smoothie bars protein bars juice bars acai bowls protein " +
              "smoothie shakes cold-pressed juice green juice fresh-pressed juice kombucha sparkling water flavored sparkling water " +
              "herbal tea iced tea black tea green tea yerba mate herbal infusions green smoothies wellness shots detox water " +
              "electrolyte water tonics wellness drinks hydration drinks sports water electrolyte infused water vegan snacks vegan " +
              "treats vegan chocolate vegan cookies vegan ice cream plant-based desserts",
        expectedUrl: "https://www.qualtry.com/search?type=product&q=apple+banana+orange+grape+cherry+peach+pear+pineapple+strawberry+watermelon+" +
              "blueberry+raspberry+blackberries+plum+apricot+kiwi+mango+coconut+papaya+lime+lemon+tangerine+pomegranate+cantaloupe+honeydew+" +
              "melon+dragonfruit+passionfruit+lychee+fig+nectarine+starfruit+persimmon+guava+date+tamarind+avocado+almond+cashew+pistachio+" +
              "walnut+hazelnut+macadamia+peanut+sunflower+sesame+pumpkin+chia+flax+quinoa+wheat+barley+oats+rice+corn+millet+spelt+rye+" +
              "sorghum+buckwheat+amaranth+bulgur+couscous+lentil+chickpea+kidney+bean+black+bean+pinto+bean+navy+bean+lima+bean+garbanzo+" +
              "bean+fava+bean+mung+bean+edamame+peas+soybeans+chickpea+tofu+tempeh+seitan+quinoa+rice+noodles+soba+udon+spaghetti+penne+" +
              "fusilli+ravioli+lasagna+gnocchi+macaroni+farfalle+rigatoni+tortellini+linguine+couscous+farro+barley+bulgur+wheat+couscous+" +
              "buckwheat+soba+spaghetti+rice+noodles+eggplant+zucchini+squash+cucumber+spinach+kale+lettuce+arugula+collard+greens+swiss+" +
              "chard+mustard+greens+dandelion+greens+bok+choy+napa+cabbage+cabbage+celery+bell+pepper+tomato+onion+garlic+ginger+shallot+" +
              "leeks+green+onion+scallion+chives+parsley+cilantro+basil+rosemary+thyme+oregano+dill+sage+tarragon+marjoram+mint+cumin+" +
              "coriander+turmeric+paprika+chili+powder+cinnamon+nutmeg+cardamom+cloves+allspice+cumin+fennel+mustard+seeds+poppy+seeds+" +
              "sesame+seeds+black+sesame+seeds+sunflower+seeds+flax+seeds+chia+seeds+hemp+seeds+vanilla+nutmeg+cayenne+red+pepper+flakes+" +
              "black+pepper+white+pepper+cayenne+chili+flakes+smoked+paprika+ground+ginger+garlic+powder+onion+powder+turmeric+powder+" +
              "salt+kosher+salt+sea+salt+Himalayan+pink+salt+garlic+salt+onion+salt+truffle+salt+celery+salt+kosher+salt+lime+zest+" +
              "lemon+zest+orange+zest+ginger+powder+garlic+granules+chili+flakes+smoked+salt+baking+soda+baking+powder+cornstarch+tapioca+" +
              "flour+arrowroot+powder+xanthan+gum+guar+gum+pectin+agar+agar+gelatin+agar+thickener+arrowroot+pectin+guar+gum+carrageenan+" +
              "acacia+gum+cellulose+gum+monoglycerides+sodium+citrate+guar+gum+calcium+propionate+ascorbic+acid+xanthan+gum+citric+acid+" +
              "yeast+sourdough+yeast+active+yeast+rapid+rise+yeast+dry+yeast+baking+yeast+quick+rise+yeast+baker%27s+yeast+bread+" +
              "flour+all-purpose+flour+self-raising+flour+cake+flour+pastry+flour+whole+wheat+flour+rye+flour+gluten-free+flour+almond+" +
              "flour+coconut+flour+rice+flour+oat+flour+sorghum+flour+teff+flour+tapioca+flour+corn+flour+potato+flour+chickpea+flour+" +
              "millet+flour+buckwheat+flour+quinoa+flour+spelt+flour+nut+flours+gluten-free+flour+blends+wheat+germ+oatmeal+whole+grain+" +
              "oats+rolled+oats+steel-cut+oats+instant+oats+oat+bran+quinoa+millet+bulgur+barley+rice+jasmine+rice+basmati+rice+brown+" +
              "rice+wild+rice+sushi+rice+black+rice+white+rice+Arborio+rice+short+grain+rice+long+grain+rice+sushi+rice+farro+rice+" +
              "white+rice+steamed+rice+cauliflower+rice+risotto+pilaf+fried+rice+rice+pudding+sweet+rice+sticky+rice+sushi+rolls+rice+" +
              "cakes+rice+crackers+brown+rice+crisps+rice+noodles+glass+noodles+rice+paper+rice+sheets+instant+noodles+ramen+noodles+" +
              "udon+noodles+soba+noodles+spaghetti+linguine+egg+noodles+lasagna+noodles+fettuccine+macaroni+penne+farfalle+fusilli+" +
              "rigatoni+gnocchi+ravioli+tortellini+dumplings+wonton+baozi+spring+rolls+egg+rolls+gyoza+pierogi+dim+sum+empanada+" +
              "potsticker+samosa+pastry+croissant+baguette+muffin+brioche+scone+pita+naan+challah+bagel+focaccia+ciabatta+tortilla+" +
              "crepe+pancake+waffle+waffle+fries+hashbrowns+latkes+latke+hash+browns+croissant+croissant+rolls+buns+hot+dog+rolls+" +
              "sandwich+bread+loaf+brioche+dinner+rolls+dinner+bread+pita+bread+flatbread+sourdough+bread+gluten-free+bread+cornbread+" +
              "banana+bread+zucchini+bread+pumpkin+bread+challah+bread+cinnamon+rolls+garlic+bread+breadsticks+bread+crumbs+breadcrumbs+" +
              "breadcrumbs+croutons+muffin+mixes+cake+mixes+pancake+mix+pizza+dough+cookie+dough+pie+crust+dough+danish+dough+" +
              "puff+pastry+filo+dough+croissant+dough+croissant+recipe+cake+flour+pastry+flour+almond+flour+yeast+dough+chocolate+" +
              "cake+vanilla+cake+lemon+cake+orange+cake+carrot+cake+red+velvet+cake+marble+cake+pound+cake+angel+food+cake+" +
              "chiffon+cake+cheesecake+coffee+cake+shortbread+cookies+sugar+cookies+oatmeal+cookies+chocolate+chip+cookies+peanut+" +
              "butter+cookies+snickerdoodle+cookies+gingerbread+cookies+macaron+meringue+biscotti+fortune+cookies+fig+cookies+" +
              "sandwich+cookies+whoopie+pies+ice+cream+cake+cake+pops+pudding+pie+tart+cheesecake+pies+pumpkin+pie+apple+pie+" +
              "cherry+pie+pecan+pie+lemon+meringue+pie+key+lime+pie+coconut+cream+pie+banana+cream+pie+sweet+potato+pie+peach+" +
              "pie+blueberry+pie+chocolate+pie+strawberry+pie+lemon+pie+peach+cobbler+cobbler+crumble+crumble+pie+turnovers+" +
              "hand+pies+galette+almond+cake+flourless+chocolate+cake+tortes+cake+squares+brownie+blondies+fudge+fondant+ganache+" +
              "icing+frosting+buttercream+frosting+cream+cheese+frosting+ganache+icing+chocolate+ganache+ganache+sauce+whipped+" +
              "cream+whipped+topping+fondant+edible+flowers+sprinkles+colored+sugar+chocolate+chips+butterscotch+chips+toffee+" +
              "bits+marshmallows+mini+marshmallows+rainbow+sprinkles+nonpareils+candy+melts+chocolate+bark+chocolate+truffles+praline+" +
              "caramels+hard+candy+lollipops+chocolate-covered+strawberries+chocolate+fondue+chocolate+fountains+fruit+fondue+" +
              "caramel+sauce+hot+fudge+butterscotch+sauce+whipped+cream+marshmallow+fluff+syrup+agave+syrup+honey+maple+" +
              "syrup+chocolate+syrup+buttermilk+evaporated+milk+condensed+milk+almond+milk+coconut+milk+soy+milk+oat+milk+" +
              "rice+milk+hemp+milk+cashew+milk+chocolate+milk+milkshakes+smoothies+smoothie+bowls+fruit+salad+vegetable+salad+" +
              "quinoa+salad+pasta+salad+potato+salad+bean+salad+coleslaw+cucumber+salad+tomato+salad+spinach+salad+arugula+" +
              "salad+green+salad+egg+salad+chicken+salad+tuna+salad+pasta+salad+macaroni+salad+rice+salad+beet+salad+" +
              "kale+salad+arugula+salad+broccoli+salad+fruit+salad+with+dressing+veggie+tray+veggie+platter+dip+" +
              "guacamole+salsa+hummus+tzatziki+baba+ganoush+spinach+artichoke+dip+ranch+dip+sour+cream+dip+French+" +
              "onion+dip+buffalo+chicken+dip+queso+dip+cheese+fondue+beer+cheese+fondue+spinach+artichoke+dip+" +
              "onion+dip+guacamole+salsa+tortilla+chips+potato+chips+pita+chips+pita+bread+crackers+pretzels+popcorn+" +
              "nuts+mixed+nuts+cashews+almonds+pistachios+peanuts+walnuts+hazelnuts+pecans+almonds+macadamia+peanuts+" +
              "sunflower+seeds+sesame+seeds+flax+seeds+hemp+seeds+chia+seeds+pumpkin+seeds+trail+mix+energy+" +
              "bars+granola+bars+protein+bars+fruit+leather+beef+jerky+turkey+jerky+chicken+jerky+dry+sausages+" +
              "dried+fruit+raisins+dried+apricots+dried+prunes+dried+figs+dried+cranberries+dried+cherries+banana+" +
              "chips+apple+chips+veggie+chips+kale+chips+beet+chips+potato+chips+chips+tortilla+chips+pretzels+" +
              "candy+candy+bars+chocolate+bars+candy+cane+mints+chewing+gum+hard+candy+jelly+beans+gummies+" +
              "licorice+marshmallows+jelly+drops+lollipops+taffy+gumdrops+licorice+whips+chocolate+truffles+praline+" +
              "truffles+chocolate-covered+nuts+chocolate-covered+fruits+nut+brittles+fudge+sweet+treats+desserts+" +
              "confections+praline+toffee+honeycomb+candy+caramelized+nuts+chocolate+mousse+ice+cream+sherbet+" +
              "sorbet+frozen+yogurt+custard+gelato+sherbet+parfait+frozen+treats+sherbet+popsicles+ice+lollies+" +
              "gelato+pops+popsicles+frozen+fruits+sorbet+dairy-free+ice+cream+coconut+milk+ice+cream+chocolate+" +
              "chip+ice+cream+vanilla+ice+cream+strawberry+ice+cream+mint+chocolate+chip+ice+cream+butter+" +
              "pecan+ice+cream+pistachio+ice+cream+rocky+road+ice+cream+cookies+and+cream+ice+cream+salted+" +
              "caramel+ice+cream+coffee+ice+cream+birthday+cake+ice+cream+strawberry+sorbet+raspberry+sorbet+" +
              "lemon+sorbet+pina+colada+sorbet+tropical+fruit+sorbet+fruit+bars+frozen+smoothies+fruit+juice+" +
              "vegetable+juice+smoothies+drinks+tea+coffee+herbal+tea+green+tea+black+tea+white+tea+chai+" +
              "tea+fruit+tea+iced+tea+milkshake+frappuccino+lemonade+iced+coffee+iced+tea+iced+drinks+" +
              "sparkling+water+mineral+water+club+soda+flavored+water+coconut+water+soda+tonic+water+ginger+" +
              "ale+root+beer+cola+lemonade+limeade+iced+green+tea+iced+herbal+tea+cranberry+juice+apple+" +
              "juice+carrot+juice+orange+juice+pineapple+juice+mango+juice+berry+juice+beet+juice+pomegranate+" +
              "juice+cucumber+juice+lemonade+cranberry+limeade+coconut+water+sparkling+water+orange+soda+" +
              "fruit+punch+lemonade+sparkling+lemonade+sparkling+iced+tea+fruit+soda+energy+drinks+sports+" +
              "drinks+kombucha+protein+shakes+meal+replacement+drinks+whey+protein+shakes+plant-based+protein+" +
              "shakes+protein+smoothies+electrolyte+drinks+sparkling+water+flavored+water+iced+coffee+coffee+" +
              "latte+espresso+cappuccino+mocha+iced+espresso+black+coffee+cold+brew+herbal+tea+coffee+with+" +
              "milk+hot+chocolate+drinks+hot+cocoa+drink+packets+iced+tea+fruit+smoothies+veggie+smoothies+" +
              "milkshakes+shakes+frosty+whipped+cream+bubble+tea+iced+bubble+tea+smoothie+bowls+granola+" +
              "parfait+granola+parfait+yogurt+parfait+fruit+parfait+drinkable+yogurt+yogurt+cups+dairy-free+" +
              "yogurt+chia+pudding+matcha+latte+chai+latte+iced+lattes+frappes+iced+frappuccino+matcha+" +
              "frappuccino+smoothie+bowls+granola+parfait+yogurt+parfait+acai+bowls+energy+drinks+smoothie+" +
              "bars+protein+bars+juice+bars+acai+bowls+protein+smoothie+shakes+cold-pressed+juice+green+" +
              "juice+fresh-pressed+juice+kombucha+sparkling+water+flavored+sparkling+water+herbal+tea+iced+" +
              "tea+black+tea+green+tea+yerba+mate+herbal+infusions+green+smoothies+wellness+shots+detox+" +
              "water+electrolyte+water+tonics+wellness+drinks+hydration+drinks+sports+water+electrolyte+" +
              "infused+water+vegan+snacks+vegan+treats+vegan+chocolate+vegan+cookies+vegan+ice+cream+plant-based+" +
              "desserts",
              waitForElement: '.hr--medium'
    }
    ];
  }
}

export default SearchGo;
          