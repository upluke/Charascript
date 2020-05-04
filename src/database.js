const collections = [
    {
       "collectionId": "col-0",
       "collectionName": "Othello",
       "characters": [
          "col-0-profile-0",
          "col-0-profile-1",
          "col-0-profile-2",
          "col-0-profile-3",
          "col-0-profile-4",
          "col-0-profile-5",
          "col-0-profile-6"
       ]
    },
    {
       "collectionId": "col-1",
       "collectionName": "Season of Migration to the North",
       "characters": [
          "col-1-profile-0",
          "col-1-profile-1",
          "col-1-profile-2",
          "col-1-profile-3",
          "col-1-profile-4",
          "col-1-profile-5",
          "col-1-profile-6",
          "col-1-profile-7",
          "col-1-profile-8"
       ]
    }
 ]

 const names = [
    {
       "nameId": "col-0-name-0",
       "name": "Lago",
       "profileId": "col-0-profile-0"
    },
    {
       "nameId": "col-0-name-1",
       "name": "Michael Cassio",
       "profileId": "col-0-profile-1"
    },
    {
       "nameId": "col-0-name-2",
       "name": "Emilia",
       "profileId": "col-0-profile-2"
    },
    {
       "nameId": "col-0-name-3",
       "name": "Roderigo",
       "profileId": "col-0-profile-3"
    },
    {
       "nameId": "col-0-name-4",
       "name": "Bianca",
       "profileId": "col-0-profile-4"
    },
    {
       "nameId": "col-0-name-5",
       "name": "Brabanzio",
       "profileId": "col-0-profile-5"
    },
    {
       "nameId": "col-0-name-6",
       "name": "Duke Of Venice",
       "profileId": "col-0-profile-6"
    },
    {
       "nameId": "col-1-name-0",
       "name": "Hajj Ahmed",
       "profileId": "col-1-profile-0"
    },
    {
       "nameId": "col-1-name-1",
       "name": "The narrator",
       "profileId": "col-1-profile-1"
    },
    {
       "nameId": "col-1-name-2",
       "name": "The narrator's father",
       "profileId": "col-1-profile-2"
    },
    {
       "nameId": "col-1-name-3",
       "name": "Mustafa Sa'eed",
       "profileId": "col-1-profile-3"
    },
    {
       "nameId": "col-1-name-4",
       "name": "Mahmoud",
       "profileId": "col-1-profile-4"
    },
    {
       "nameId": "col-1-name-5",
       "name": "Wad Rayyes",
       "profileId": "col-1-profile-5"
    },
    {
       "nameId": "col-1-name-6",
       "name": "Mahjoub",
       "profileId": "col-1-profile-6"
    },
    {
       "nameId": "col-1-name-7",
       "name": "Bint Majzoub",
       "profileId": "col-1-profile-7"
    },
    {
       "nameId": "col-1-name-8",
       "name": "Hosna bint Mahmoud",
       "profileId": "col-1-profile-8"
    }
 ]

 const profiles = [
    {
       "profileId": "col-0-profile-0",
       "profile": "Othello's ensign (a job also known as an ancient or standard-bearer), and the villain of the play. Iago is twenty-eight years old. While his ostensible reason for desiring Othello's demise is that he has been passed over for promotion to lieutenant, Iago's motivations are never very clearly expressed and seem to originate in an obsessive, almost aesthetic delight in manipulation and destruction.",
       "nameId": "col-0-name-0"
    },
    {
       "profileId": "col-0-profile-1",
       "profile": "Othello's lieutenant. Cassio is a young and inexperienced soldier, whose high position is much resented by Iago. Truly devoted to Othello, Cassio is extremely ashamed after being implicated in a drunken brawl on Cyprus and losing his place as lieutenant. Iago uses Cassio's youth, good looks, and friendship with Desdemona to play on Othello's insecurities about Desdemona's fidelity.",
       "nameId": "col-0-name-1"
    },
    {
       "profileId": "col-0-profile-2",
       "profile": "Iago's wife and Desdemona's attendant. A cynical, worldly woman, she is deeply attached to her mistress and distrustful of her husband.",
       "nameId": "col-0-name-2"
    },
    {
       "profileId": "col-0-profile-3",
       "profile": "A jealous suitor of Desdemona. Young, rich, and foolish, Roderigo is convinced that if he gives Iago all of his money, Iago will help him win Desdemona's hand. Repeatedly frustrated as Othello marries Desdemona and then takes her to Cyprus, Roderigo is ultimately desperate enough to agree to help Iago kill Cassio after Iago points out that Cassio is another potential rival for Desdemona.",
       "nameId": "col-0-name-3"
    },
    {
       "profileId": "col-0-profile-4",
       "profile": "A courtesan, or prostitute, in Cyprus. Bianca's favorite customer is Cassio, who teases her with promises of marriage.",
       "nameId": "col-0-name-4"
    },
    {
       "profileId": "col-0-profile-5",
       "profile": "Desdemona's father, a somewhat blustering and self-important Venetian senator. As a friend of Othello, Brabanzio feels betrayed when the general marries his daughter in secret.",
       "nameId": "col-0-name-5"
    },
    {
       "profileId": "col-0-profile-6",
       "profile": "The official authority in Venice, the duke has great respect for Othello as a public and military servant. His primary role within the play is to reconcile Othello and Brabanzio in Act I, scene iii, and then to send Othello to Cyprus.",
       "nameId": "col-0-name-6"
    },
    {
       "profileId": "col-1-profile-0",
       "profile": "The narrator's nonagenarian paternal grandfather lives a happy, stable life of prayer and socializing. To both the narrator and Mustafa Sa'eed, the grandfather represents the simple, virtuous country life that they yearn for. Although the narrator never calls his grandfather by name, we eventually learn that it is Hajj Ahmed.",
       "nameId": "col-1-name-0"
    },
    {
       "profileId": "col-1-profile-1",
       "profile": "The unnamed narrator of Season of Migration to the North was born in a normal farming family in Wad Hamid. However, his sharp intelligence and ambition allowed him to advance through the Sudanese education system and eventually attend university in London, where he earned a doctorate in British poetry. The narrator feels obliged to use his education to help advance Sudan, which had only been independent for 13 years when the novel was published. However, he finds this difficult because of his passive personality and widespread government corruption.",
       "nameId": "col-1-name-1"
    },
    {
       "profileId": "col-1-profile-2",
       "profile": "A relatively minor figure in the novel, the narrator's father is kind and supportive to him. However, he is fundamentally conservative and cannot understand the narrator's objections to the oppression of women in village culture.",
       "nameId": "col-1-name-2"
    },
    {
       "profileId": "col-1-profile-3",
       "profile": "Mustafa Sa'eed looms in the narrator's thoughts throughout the novel. In his forties, Mustafa moved to Wad Hamid and remained a mysterious figure there, marrying a village woman, Hosna bint Mahmoud, but never speaking to anyone about his past. The narrator eventually learns that Mustafa is quite similar to himself––both men were highly intelligent as children, and attended university in the United Kingdom.",
       "nameId": "col-1-name-3"
    },
    {
       "profileId": "col-1-profile-4",
       "profile": "A prominent farmer in Wad Hamid, Mahmoud arranges the marriage between his daughter, Hosna, and Mustafa Sa'eed. Many of the village elders, including the narrator's grandfather, judge Mahmoud for marrying his daughter to an outsider, but Hosna and Mustafa have a happy life together until the latter dies.",
       "nameId": "col-1-name-4"
    },
    {
       "profileId": "col-1-profile-5",
       "profile": "A lifelong womanizer, Wad Rayyes is in his late forties when the narrator first returns from Europe, and is in his seventies in the 'present-day' section of the novel. Although he already has several wives, he is determined to marry Hosna Bint Mahmoud after her husband dies.",
       "nameId": "col-1-name-5"
    },
    {
       "profileId": "col-1-profile-6",
       "profile": "The narrator's good friend from elementary school. Mahjoub was cleverer than the narrator as a child, but didn't pursue secondary school because he wanted to be a farmer. As an adult, he is the chairman of the Agricultural Project Committee and a major figure in village politics.",
       "nameId": "col-1-name-6"
    },
    {
       "profileId": "col-1-profile-7",
       "profile": "Bint Majzoub is famous in the village for her willingness to speak bluntly about sex. Now in her eighties, Bint Majzoub successively married five husbands when she was younger, each of whom died. She is the only village woman who drinks and socializes with the men, and her best friends are Wad Rayyes, Bakri, and the narrator's grandfather.",
       "nameId": "col-1-name-7"
    },
    {
       "profileId": "col-1-profile-8",
       "profile": "The beautiful, modest wife of Mustafa Sa'eed. After Mustafa dies, she lives alone and cares for her two sons, rejecting all suitors. As the executor of Mustafa's estate, the narrator is technically her guardian, although he feels uncomfortable with this role. When Wad Rayyes proposes to Hosna, the narrator realizes he is in love with her but does not intervene to stop the marriage. Hosna resists being forced to marry Wad Rayyes, and eventually murders him.",
       "nameId": "col-1-name-8"
    }
 ]