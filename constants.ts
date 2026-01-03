import { Item, Rating, User } from './types';

export const USERS: User[] = [
  { id: 'user1', name: 'Alice' },
  { id: 'user2', name: 'Bob' },
  { id: 'user3', name: 'Charlie' },
  { id: 'user4', name: 'Diana' },
  { id: 'user5', name: 'Eve' },
];

export const ITEMS: Item[] = [
  // Existing Items (with updated image URLs for slight variety)
  { id: 'item1', name: 'Inception', category: 'Movie', genres: ['Sci-Fi', 'Action', 'Thriller'], tags: ['dreams', 'mind-bending', 'heist'], description: 'A thief who steals corporate secrets through use of dream-sharing technology.', imageUrl: 'https://picsum.photos/300/200?movie=1' },
  { id: 'item2', name: 'Dune', category: 'Book', genres: ['Sci-Fi', 'Fantasy', 'Adventure'], tags: ['desert', 'politics', 'epic'], description: 'A saga of a distant future, a feudal interstellar society, and a desert planet.', imageUrl: 'https://picsum.photos/300/200?book=2' },
  { id: 'item3', name: 'The Martian', category: 'Book', genres: ['Sci-Fi', 'Adventure', 'Survival'], tags: ['space', 'survival', 'humor'], description: 'An astronaut is left behind on Mars and must use his ingenuity to survive.', imageUrl: 'https://picsum.photos/300/200?book=3' },
  { id: 'item4', name: 'Interstellar', category: 'Movie', genres: ['Sci-Fi', 'Adventure', 'Drama'], tags: ['space', 'time-travel', 'emotional'], description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', imageUrl: 'https://picsum.photos/300/200?movie=4' },
  { id: 'item5', name: 'Lord of the Rings', category: 'Book', genres: ['Fantasy', 'Adventure'], tags: ['elves', 'magic', 'epic', 'quest'], description: 'A hobbit, Frodo Baggins, inherits a magic ring that is actually the One Ring.', imageUrl: 'https://picsum.photos/300/200?book=5' },
  { id: 'item6', name: 'Productivity Planner', category: 'Product', genres: ['Self-Help', 'Organization'], tags: ['organization', 'goals', 'planning'], description: 'A daily planner to help you achieve your goals and boost productivity.', imageUrl: 'https://picsum.photos/300/200?product=6' },
  { id: 'item7', name: 'Atomic Habits', category: 'Book', genres: ['Self-Help', 'Psychology'], tags: ['habits', 'personal-development', 'self-improvement'], description: 'An easy & proven way to build good habits & break bad ones.', imageUrl: 'https://picsum.photos/300/200?book=7' },
  { id: 'item8', name: 'The Matrix', category: 'Movie', genres: ['Sci-Fi', 'Action'], tags: ['virtual-reality', 'philosophy', 'cyberpunk'], description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.', imageUrl: 'https://picsum.photos/300/200?movie=8' },
  { id: 'item9', name: '1984', category: 'Book', genres: ['Dystopian', 'Sci-Fi', 'Political'], tags: ['surveillance', 'totalitarianism', 'classic'], description: 'A dystopian social science fiction novel by George Orwell.', imageUrl: 'https://picsum.photos/300/200?book=9' },
  { id: 'item10', name: 'Ergonomic Keyboard', category: 'Product', genres: ['Technology', 'Productivity'], tags: ['comfort', 'productivity', 'hardware'], description: 'Designed for comfort to reduce strain during long typing sessions.', imageUrl: 'https://picsum.photos/300/200?product=10' },
  { id: 'item11', name: 'The Hobbit', category: 'Book', genres: ['Fantasy', 'Adventure'], tags: ['dragons', 'quest', 'classic'], description: 'Bilbo Baggins is swept into a grand adventure to reclaim treasure.', imageUrl: 'https://picsum.photos/300/200?book=11' },
  { id: 'item12', name: 'Blade Runner 2049', category: 'Movie', genres: ['Sci-Fi', 'Neo-noir', 'Thriller'], tags: ['androids', 'dystopian', 'future'], description: 'A young blade runner uncovers a long-buried secret that has the potential to plunge what’s left of society into chaos.', imageUrl: 'https://picsum.photos/300/200?movie=12' },
  { id: 'item13', name: 'The Power of Habit', category: 'Book', genres: ['Self-Help', 'Psychology'], tags: ['habits', 'science', 'change'], description: 'Explores the science behind habit formation in individuals, organizations, and societies.', imageUrl: 'https://picsum.photos/300/200?book=13' },
  { id: 'item14', name: 'Smartwatch', category: 'Product', genres: ['Technology', 'Fitness'], tags: ['wearable', 'health', 'gadget'], description: 'A wearable device that provides notifications, tracks fitness, and much more.', imageUrl: 'https://picsum.photos/300/200?product=14' },
  { id: 'item15', name: 'Arrival', category: 'Movie', genres: ['Sci-Fi', 'Drama', 'Mystery'], tags: ['aliens', 'linguistics', 'communication', 'non-linear time'], description: 'A linguist is recruited by the military to assist in translating alien communications.', imageUrl: 'https://picsum.photos/300/200?movie=15' },
  { id: 'item16', name: 'Foundation', category: 'Book', genres: ['Sci-Fi', 'Epic', 'Political'], tags: ['galactic empire', 'psychohistory', 'future'], description: 'The story of a decaying galactic empire and its efforts to preserve knowledge.', imageUrl: 'https://picsum.photos/300/200?book=16' },
  { id: 'item17', name: 'Pride and Prejudice', category: 'Book', genres: ['Romance', 'Classic', 'Drama'], tags: ['19th century', 'love', 'social commentary'], description: 'A classic novel of manners focusing on the emotional development of Elizabeth Bennet.', imageUrl: 'https://picsum.photos/300/200?book=17' },
  { id: 'item18', name: 'The Grand Budapest Hotel', category: 'Movie', genres: ['Comedy', 'Adventure', 'Drama'], tags: ['quirky', 'heist', 'europe', 'wes anderson'], description: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the interwar period.', imageUrl: 'https://picsum.photos/300/200?movie=18' },
  { id: 'item19', name: 'Sapiens: A Brief History of Humankind', category: 'Book', genres: ['History', 'Non-fiction', 'Science'], tags: ['human evolution', 'civilization', 'philosophy'], description: 'Explores the course of human history, from the first humans to the twenty-first century.', imageUrl: 'https://picsum.photos/300/200?book=19' },
  { id: 'item20', name: 'Whiplash', category: 'Movie', genres: ['Drama', 'Music'], tags: ['jazz', 'ambition', 'perfection', 'intensity'], description: 'A young drummer enrolls in a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.', imageUrl: 'https://picsum.photos/300/200?movie=20' },
  { id: 'item21', name: 'The Name of the Wind', category: 'Book', genres: ['Fantasy', 'Adventure'], tags: ['magic', 'storytelling', 'wizardry', 'coming-of-age'], description: 'The autobiography of Kvothe, an infamous magician, assassin, and musician.', imageUrl: 'https://picsum.photos/300/200?book=21' },
  { id: 'item22', name: 'Parasite', category: 'Movie', genres: ['Thriller', 'Drama', 'Black Comedy'], tags: ['social satire', 'class struggle', 'korean', 'suspense'], description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim family.', imageUrl: 'https://picsum.photos/300/200?movie=22' },
  { id: 'item23', name: 'Becoming', category: 'Book', genres: ['Memoir', 'Biography', 'Self-Help'], tags: ['empowerment', 'leadership', 'inspiration', 'michelle obama'], description: 'An intimate, powerful, and inspiring memoir by former First Lady Michelle Obama.', imageUrl: 'https://picsum.photos/300/200?book=23' },
  { id: 'item24', name: 'Spirited Away', category: 'Movie', genres: ['Animation', 'Fantasy', 'Adventure'], tags: ['ghibli', 'magic', 'coming-of-age', 'japanese'], description: 'A young girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.', imageUrl: 'https://picsum.photos/300/200?movie=24' },

  // New Books
  { id: 'item25', name: 'The Hitchhiker\'s Guide to the Galaxy', category: 'Book', genres: ['Sci-Fi', 'Comedy', 'Adventure'], tags: ['space travel', 'philosophy', 'humor'], description: 'Arthur Dent escapes Earth moments before its destruction and embarks on a cosmic journey.', imageUrl: 'https://picsum.photos/300/200?book=25' },
  { id: 'item26', name: 'To Kill a Mockingbird', category: 'Book', genres: ['Classic', 'Drama', 'Southern Gothic'], tags: ['justice', 'racism', 'childhood'], description: 'Scout Finch, a young girl in the 1930s American South, witnesses her father, a lawyer, defend a black man unjustly accused of rape.', imageUrl: 'https://picsum.photos/300/200?book=26' },
  { id: 'item27', name: 'The Great Gatsby', category: 'Book', genres: ['Classic', 'Drama', 'Romance'], tags: ['roaring twenties', 'american dream', 'wealth', 'tragedy'], description: 'A story of wealth, love, and tragedy in the Roaring Twenties.', imageUrl: 'https://picsum.photos/300/200?book=27' },
  { id: 'item28', name: 'Educated', category: 'Book', genres: ['Memoir', 'Biography', 'Inspirational'], tags: ['self-discovery', 'education', 'family'], description: 'A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.', imageUrl: 'https://picsum.photos/300/200?book=28' },
  { id: 'item29', name: 'Circe', category: 'Book', genres: ['Fantasy', 'Mythology', 'Historical Fiction'], tags: ['greek myths', 'witchcraft', 'feminist retelling'], description: 'A retelling of the myth of Circe, the goddess of witchcraft, and her life exiled on an island.', imageUrl: 'https://picsum.photos/300/200?book=29' },
  { id: 'item30', name: 'Project Hail Mary', category: 'Book', genres: ['Sci-Fi', 'Comedy', 'Adventure'], tags: ['space', 'survival', 'first contact', 'problem-solving'], description: 'An astronaut wakes up on a mission to save humanity with no memory of how he got there.', imageUrl: 'https://picsum.photos/300/200?book=30' },
  { id: 'item31', name: 'The Nightingale', category: 'Book', genres: ['Historical Fiction', 'Drama', 'War'], tags: ['WWII', 'france', 'sisterhood', 'resilience'], description: 'Two sisters\' struggle to survive and resist during the German occupation of France in World War II.', imageUrl: 'https://picsum.photos/300/200?book=31' },
  { id: 'item32', name: 'Where the Crawdads Sing', category: 'Book', genres: ['Mystery', 'Literary Fiction', 'Thriller'], tags: ['marsh', 'nature', 'loneliness', 'courtroom drama'], description: 'A wild girl raised in the marshlands of North Carolina becomes a suspect in a murder.', imageUrl: 'https://picsum.photos/300/200?book=32' },
  { id: 'item33', name: 'Dark Matter', category: 'Book', genres: ['Sci-Fi', 'Thriller', 'Mystery'], tags: ['multiverse', 'parallel worlds', 'quantum physics'], description: 'A physics professor is abducted into an alternate version of his life.', imageUrl: 'https://picsum.photos/300/200?book=33' },
  { id: 'item34', name: 'The Midnight Library', category: 'Book', genres: ['Fantasy', 'Drama', 'Philosophical'], tags: ['choices', 'regret', 'alternate lives', 'self-acceptance'], description: 'Nora Seed gets a chance to try out all the lives she could have lived.', imageUrl: 'https://picsum.photos/300/200?book=34' },
  { id: 'item35', name: 'The Alchemist', category: 'Book', genres: ['Philosophical', 'Adventure', 'Fantasy'], tags: ['journey', 'destiny', 'self-discovery', 'spiritual'], description: 'A young shepherd boy journeys to the Egyptian desert in search of treasure.', imageUrl: 'https://picsum.photos/300/200?book=35' },

  // New Movies
  { id: 'item36', name: 'Pulp Fiction', category: 'Movie', genres: ['Crime', 'Drama', 'Neo-noir'], tags: ['non-linear', 'cult classic', 'dialogue'], description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', imageUrl: 'https://picsum.photos/300/200?movie=36' },
  { id: 'item37', name: 'Forrest Gump', category: 'Movie', genres: ['Drama', 'Romance', 'Comedy'], tags: ['historical events', 'life story', 'inspirational'], description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.', imageUrl: 'https://picsum.photos/300/200?movie=37' },
  { id: 'item38', name: 'The Shawshank Redemption', category: 'Movie', genres: ['Drama'], tags: ['prison', 'hope', 'friendship', 'escape'], description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', imageUrl: 'https://picsum.photos/300/200?movie=38' },
  { id: 'item39', name: 'The Dark Knight', category: 'Movie', genres: ['Action', 'Crime', 'Drama'], tags: ['superhero', 'villain', 'dark', 'psychological'], description: 'Batman faces a new threat from a criminal mastermind known as The Joker.', imageUrl: 'https://picsum.photos/300/200?movie=39' },
  { id: 'item40', name: 'Spiderman: Into the Spider-Verse', category: 'Movie', genres: ['Animation', 'Action', 'Adventure'], tags: ['multiverse', 'superhero', 'visually stunning', 'coming-of-age'], description: 'Teen Miles Morales becomes Spider-Man of his reality, and crosses paths with five counterparts from other dimensions to stop a threat to all realities.', imageUrl: 'https://picsum.photos/300/200?movie=40' },
  { id: 'item41', name: 'La La Land', category: 'Movie', genres: ['Musical', 'Drama', 'Romance'], tags: ['hollywood', 'dreams', 'jazz', 'bittersweet'], description: 'A jazz pianist falls for an aspiring actress in Los Angeles.', imageUrl: 'https://picsum.photos/300/200?movie=41' },
  { id: 'item42', name: 'Joker', category: 'Movie', genres: ['Crime', 'Drama', 'Thriller'], tags: ['psychological', 'villain origin', 'dark', 'gritty'], description: 'A mentally troubled comedian is disregarded by society, leading him to a downward spiral of revolution and bloody crime.', imageUrl: 'https://picsum.photos/300/200?movie=42' },
  { id: 'item43', name: 'Knives Out', category: 'Movie', genres: ['Mystery', 'Comedy', 'Crime'], tags: ['whodunnit', 'ensemble cast', 'detective', 'witty'], description: 'A detective investigates the death of a wealthy crime novelist.', imageUrl: 'https://picsum.photos/300/200?movie=43' },
  { id: 'item44', name: 'Eternal Sunshine of the Spotless Mind', category: 'Movie', genres: ['Sci-Fi', 'Romance', 'Drama'], tags: ['memory', 'relationships', 'mind-bending', 'quirky'], description: 'A couple undergo a procedure to erase each other from their memories after a bitter breakup.', imageUrl: 'https://picsum.photos/300/200?movie=44' },
  { id: 'item45', name: 'Get Out', category: 'Movie', genres: ['Horror', 'Mystery', 'Thriller'], tags: ['social commentary', 'racism', 'suspense', 'satire'], description: 'A young African-American man visits his white girlfriend\'s parents for the first time, only to discover a sinister secret.', imageUrl: 'https://picsum.photos/300/200?movie=45' },
  { id: 'item46', name: 'Amelie', category: 'Movie', genres: ['Comedy', 'Romance', 'Fantasy'], tags: ['paris', 'quirky', 'charming', 'whimsical'], description: 'A shy waitress in Paris decides to discreetly orchestrate the lives of those around her.', imageUrl: 'https://picsum.photos/300/200?movie=46' },

  // More Books (Global & Diverse)
  { id: 'item47', name: 'One Hundred Years of Solitude', category: 'Book', genres: ['Magical Realism', 'Classic', 'Family Saga'], tags: ['latin american', 'generational', 'epic', 'solitude'], description: 'The literary masterpiece of Gabriel García Márquez, telling the story of the Buendía family in the fictional town of Macondo.', imageUrl: 'https://picsum.photos/300/200?book=47' },
  { id: 'item48', name: 'The Secret History', category: 'Book', genres: ['Dark Academia', 'Mystery', 'Thriller'], tags: ['college', 'philosophy', 'murder', 'secrets'], description: 'A group of classics students at an elite New England college fall into a lifestyle of hedonism, moral ambiguity, and murder.', imageUrl: 'https://picsum.photos/300/200?book=48' },
  { id: 'item49', name: 'Norwegian Wood', category: 'Book', genres: ['Literary Fiction', 'Romance', 'Coming-of-Age'], tags: ['japanese', 'melancholy', 'student life', 'loss'], description: 'A poignant story of loss and burgeoning sexuality set in 1960s Tokyo.', imageUrl: 'https://picsum.photos/300/200?book=49' },
  { id: 'item50', name: 'Homegoing', category: 'Book', genres: ['Historical Fiction', 'Family Saga', 'Literary Fiction'], tags: ['african american', 'ghana', 'slavery', 'identity'], description: 'A powerful novel following the descendants of two half-sisters in Ghana, one who marries an Englishman and one who is sold into slavery.', imageUrl: 'https://picsum.photos/300/200?book=50' },
  { id: 'item51', name: 'The Book Thief', category: 'Book', genres: ['Historical Fiction', 'War', 'Drama'], tags: ['WWII', 'germany', 'narrated by death', 'books'], description: 'A young girl living with her foster family in Nazi Germany steals books and shares them with others, including the Jewish man hiding in her basement.', imageUrl: 'https://picsum.photos/300/200?book=51' },
  { id: 'item52', name: 'Remembrance of Things Past', category: 'Book', genres: ['Modernist', 'Literary Fiction', 'Philosophical'], tags: ['french', 'memory', 'society', 'introspection'], description: 'Marcel Proust\'s monumental work exploring involuntary memory, time, and society.', imageUrl: 'https://picsum.photos/300/200?book=52' },
  { id: 'item53', name: 'The Remains of the Day', category: 'Book', genres: ['Literary Fiction', 'Historical Fiction', 'Drama'], tags: ['england', 'post-WWII', 'butler', 'unrequited love'], description: 'A poignant reflection by an English butler on his life of service and missed opportunities.', imageUrl: 'https://picsum.photos/300/200?book=53' },
  { id: 'item54', name: 'Pachinko', category: 'Book', genres: ['Historical Fiction', 'Family Saga', 'Korean Diaspora'], tags: ['korea', 'japan', 'immigrant experience', 'resilience'], description: 'A sweeping saga of a Korean family who immigrates to Japan in the early 20th century, facing discrimination and hardship.', imageUrl: 'https://picsum.photos/300/200?book=54' },
  { id: 'item55', name: 'Kafka on the Shore', category: 'Book', genres: ['Magical Realism', 'Mystery', 'Adventure'], tags: ['japanese', 'fantasy', 'metaphysical', 'cats'], description: 'Two parallel narratives: a teenage runaway and an elderly man who can talk to cats.', imageUrl: 'https://picsum.photos/300/200?book=55' },
  { id: 'item56', name: 'Things Fall Apart', category: 'Book', genres: ['African Literature', 'Classic', 'Tragedy'], tags: ['nigeria', 'colonialism', 'igbo culture', 'tradition'], description: 'A powerful novel about the impact of British colonialism on traditional Igbo society in Nigeria.', imageUrl: 'https://picsum.photos/300/200?book=56' },

  // More Movies (Global & Diverse)
  { id: 'item57', name: 'City of God', category: 'Movie', genres: ['Crime', 'Drama', 'Thriller'], tags: ['brazil', 'favelas', 'gangs', 'coming-of-age'], description: 'Two boys\' paths diverge in the violent slums of Rio de Janeiro as one becomes a photographer and the other a drug dealer.', imageUrl: 'https://picsum.photos/300/200?movie=57' },
  { id: 'item58', name: 'Seven Samurai', category: 'Movie', genres: ['Action', 'Drama', 'Adventure'], tags: ['japanese', 'classic', 'samurai', 'village defense'], description: 'A veteran samurai gathers six others to protect a village from bandits.', imageUrl: 'https://picsum.photos/300/200?movie=58' },
  { id: 'item59', name: 'Roma', category: 'Movie', genres: ['Drama', 'Art House'], tags: ['mexico', 'black and white', 'autobiographical', 'family'], description: 'A year in the life of a middle-class family\'s live-in housekeeper in Mexico City in the early 1970s.', imageUrl: 'https://picsum.photos/300/200?movie=59' },
  { id: 'item60', name: 'Crouching Tiger, Hidden Dragon', category: 'Movie', genres: ['Action', 'Fantasy', 'Wuxia'], tags: ['china', 'martial arts', 'epic', 'romance'], description: 'A young warrior steals a legendary sword, triggering a tale of adventure and destiny.', imageUrl: 'https://picsum.photos/300/200?movie=60' },
  { id: 'item61', name: 'Oldboy', category: 'Movie', genres: ['Action', 'Mystery', 'Thriller'], tags: ['korean', 'revenge', 'violent', 'neo-noir'], description: 'A man is imprisoned for 15 years without explanation, then suddenly released and seeks vengeance.', imageUrl: 'https://picsum.photos/300/200?movie=61' },
  { id: 'item62', name: 'Cinema Paradiso', category: 'Movie', genres: ['Drama', 'Romance', 'Coming-of-Age'], tags: ['italian', 'nostalgia', 'film-making', 'friendship'], description: 'A successful film director remembers his childhood in a small Sicilian town where he fell in love with movies at the local cinema.', imageUrl: 'https://picsum.photos/300/200?movie=62' },
  { id: 'item63', name: 'The Handmaiden', category: 'Movie', genres: ['Thriller', 'Drama', 'Erotic'], tags: ['korean', 'heist', 'plot twists', 'lgbtq+'], description: 'A young Japanese heiress and a Korean pickpocket plot an elaborate scam in 1930s Korea.', imageUrl: 'https://picsum.photos/300/200?movie=63' },
  { id: 'item64', name: 'Run Lola Run', category: 'Movie', genres: ['Action', 'Thriller', 'Crime'], tags: ['german', 'fast-paced', 'alternate realities', 'butterfly effect'], description: 'Lola has twenty minutes to find 100,000 Deutschmarks to save her boyfriend\'s life.', imageUrl: 'https://picsum.photos/300/200?movie=64' },
  { id: 'item65', name: 'Pan\'s Labyrinth', category: 'Movie', genres: ['Fantasy', 'Drama', 'War'], tags: ['spanish', 'dark fantasy', 'fairytale', 'post-civil war'], description: 'In fascist Spain, a young girl escapes into an eerie, enchanting fantasy world.', imageUrl: 'https://picsum.photos/300/200?movie=65' },
  { id: 'item66', name: 'A Separation', category: 'Movie', genres: ['Drama', 'Legal'], tags: ['iranian', 'moral dilemma', 'family', 'social realism'], description: 'An Iranian couple faces a difficult decision to leave their country or stay and care for an ailing parent.', imageUrl: 'https://picsum.photos/300/200?movie=66' },
  { id: 'item67', name: 'The Intouchables', category: 'Movie', genres: ['Biography', 'Comedy', 'Drama'], tags: ['french', 'friendship', 'true story', 'inspirational'], description: 'The true story of the unlikely friendship between a quadriplegic aristocrat and his ex-con caretaker.', imageUrl: 'https://picsum.photos/300/200?movie=67' },
  { id: 'item68', name: 'Squid Game', category: 'Movie', genres: ['Thriller', 'Drama', 'Action'], tags: ['korean', 'survival game', 'social commentary', 'mystery'], description: 'Hundreds of cash-strapped contestants accept an invitation to compete in children\'s games for a tempting prize, but the stakes are deadly.', imageUrl: 'https://picsum.photos/300/200?movie=68' },
];

export const RATINGS: Rating[] = [
  // Alice (user1) - Likes Sci-Fi movies and personal growth
  { userId: 'user1', itemId: 'item1', score: 5 }, // Inception (Movie, Sci-Fi)
  { userId: 'user1', itemId: 'item4', score: 4 }, // Interstellar (Movie, Sci-Fi)
  { userId: 'user1', itemId: 'item7', score: 4 }, // Atomic Habits (Book, Self-Help)
  { userId: 'user1', itemId: 'item2', score: 2 }, // Dune (Book, Sci-Fi/Fantasy) - Disliked
  { userId: 'user1', itemId: 'item6', score: 3 }, // Productivity Planner (Product) - Neutral
  { userId: 'user1', itemId: 'item33', score: 5 }, // Dark Matter (Book, Sci-Fi Thriller)
  { userId: 'user1', itemId: 'item15', score: 5 }, // Arrival (Movie, Sci-Fi Drama)

  // Bob (user2) - Likes Fantasy/Adventure books
  { userId: 'user2', itemId: 'item2', score: 5 }, // Dune (Book, Sci-Fi/Fantasy)
  { userId: 'user2', itemId: 'item5', score: 4 }, // Lord of the Rings (Book, Fantasy)
  { userId: 'user2', itemId: 'item11', score: 5 },// The Hobbit (Book, Fantasy)
  { userId: 'user2', itemId: 'item1', score: 1 }, // Inception (Movie, Sci-Fi) - Disliked
  { userId: 'user2', itemId: 'item3', score: 3 }, // The Martian (Book, Sci-Fi) - Neutral
  { userId: 'user2', itemId: 'item21', score: 4 }, // The Name of the Wind (Book, Fantasy)
  { userId: 'user2', itemId: 'item29', score: 5 }, // Circe (Book, Fantasy Mythology)

  // Charlie (user3) - Likes Productivity products/books
  { userId: 'user3', itemId: 'item6', score: 5 }, // Productivity Planner (Product)
  { userId: 'user3', itemId: 'item7', score: 4 }, // Atomic Habits (Book, Self-Help)
  { userId: 'user3', itemId: 'item10', score: 5 },// Ergonomic Keyboard (Product)
  { userId: 'user3', itemId: 'item13', score: 4 },// The Power of Habit (Book, Self-Help)
  { userId: 'user3', itemId: 'item8', score: 2 }, // The Matrix (Movie, Sci-Fi) - Disliked
  { userId: 'user3', itemId: 'item23', score: 4 }, // Becoming (Book, Memoir)

  // Diana (user4) - Likes Sci-Fi movies and books, classic dramas
  { userId: 'user4', itemId: 'item1', score: 5 }, // Inception (Movie, Sci-Fi)
  { userId: 'user4', itemId: 'item8', score: 4 }, // The Matrix (Movie, Sci-Fi)
  { userId: 'user4', itemId: 'item9', score: 5 }, // 1984 (Book, Dystopian)
  { userId: 'user4', itemId: 'item12', score: 5 },// Blade Runner 2049 (Movie, Sci-Fi)
  { userId: 'user4', itemId: 'item5', score: 1 }, // Lord of the Rings (Book, Fantasy) - Disliked
  { userId: 'user4', itemId: 'item39', score: 5 }, // The Dark Knight (Movie, Action)
  { userId: 'user4', itemId: 'item38', score: 4 }, // The Shawshank Redemption (Movie, Drama)

  // Eve (user5) - New user, limited data (cold start example), but likes cultural films
  { userId: 'user5', itemId: 'item22', score: 5 }, // Parasite (Movie, Korean Thriller)
  { userId: 'user5', itemId: 'item24', score: 4 }, // Spirited Away (Movie, Japanese Animation)
  { userId: 'user5', itemId: 'item59', score: 5 }, // Roma (Movie, Mexican Drama)
];

export const POPULAR_ITEM_IDS: string[] = [
  'item1', 'item2', 'item5', 'item15', 'item18', 'item22', // Existing popular items
  'item26', 'item30', 'item34', 'item38', 'item39', 'item40', // Previously new popular items
  'item47', 'item51', 'item54', 'item57', 'item58', 'item65', 'item67', 'item68' // Newly added popular items for global diversity
];