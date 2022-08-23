let sounds = [
  "./public/Acastus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefb4/1553126707278/Achaean.mp3/original/Achaean.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95af1d4785d3d5df329013/1553315204466/Acheron.mp3/original/Acheron.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefb6/1553127108945/Achilles.mp3/original/Achilles.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95af3bb208fc287270e9d8/1553315204469/Acroneus.mp3/original/Acroneus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95af491905f42a6f3e06b4/1553315204472/Actoris.mp3/original/Actoris.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95af614192028641afe2fc/1553315204474/Adraste.mp3/original/Adraste.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95af6fec212d7051462cca/1553315204477/Aeaea.mp3/original/Aeaea.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95af7ceef1a1538c1698a1/1553315204480/Aeetes.mp3/original/Aeetes.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95afade2c4837cbb66e3be/1553315204483/Aegae.mp3/original/Aegae.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefb8/1553127393406/Aegisthus.mp3/original/Aegisthus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95afbee79c70b6f1392ca2/1553315204486/Aegyptius.mp3/original/Aegyptius.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95afd6ee6eb05e1dd9a162/1553315204489/Aeolus.mp3/original/Aeolus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95afe2b208fc287270ed9a/1553315204493/Aeson.mp3/original/Aeson.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95aff0ee6eb05e1dd9a1f3/1553315204497/Aethon.mp3/original/Aethon.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95affd971a1829778dea09/1553315204500/Agamemnon.mp3/original/Agamemnon.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b00aa4222ff8225a58d5/1553315204503/Agelaus.mp3/original/Agelaus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefba/1553128346886/Ajax.mp3/original/Ajax.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b01815fcc0e0be76e95d/1553315204506/Alcandre.mp3/original/Alcandre.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b0aa085229382148d04c/1553315204511/Alcimus.mp3/original/Alcimus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b0b8b208fc287270f32c/1553315204514/Alcippe.mp3/original/Alcippe.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b0d4ee6eb05e1dd9a8cb/1553315204518/Alcmaeon.mp3/original/Alcmaeon.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b0de085229382148d173/1553315204521/Alcmene.mp3/original/Alcmene.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b0eceef1a1538c16a317/1553315204523/Alector.mp3/original/Alector.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b0fc15fcc0e0be76ef29/1553315204525/Aloeus.mp3/original/Aloeus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b11124a694bdfd421d98/1553315204527/Alpheus.mp3/original/Alpheus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b11fe5e5f0b7774e77f4/1553315204531/Amnisus.mp3/original/Amnisus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b12b5bfa3f0001d3ffb5/1553315204534/Amphialus.mp3/original/Amphialus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b13bf9619a337b77a904/1553315204537/Amphiaraus.mp3/original/Amphiaraus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b147eef1a1538c16a4fe/1553315204542/Amphilocus.mp3/original/Amphilocus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b1528165f590a8d39292/1553315204545/Amphimedon.mp3/original/Amphimedon.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b1615bfa3f0001d40120/1553315204548/Amphinomus.mp3/original/Amphinomus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b16da4222ff8225a615a/1553315204551/Amythaeon.mp3/original/Amythaeon.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b192ec212d7051463a2f/1553315204554/Anchialus.mp3/original/Anchialus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b1a01905f42a6f3e16b8/1553315204558/Andraimon.mp3/original/Andraimon.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b1adb208fc287270f9ff/1553315204561/Anticleia.mp3/original/Anticleia.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b1bbe4966b0c56dc3d41/1553315204564/Anticlus.mp3/original/Anticlus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b1c91905f42a6f3e1784/1553315204567/Antilochus.mp3/original/Antilochus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefbc/1553127608383/Antinous.mp3/original/Antinous.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b1d79b747a3f922171d6/1553315204570/Antiope.mp3/original/Antiope.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b1e8c67c2f0001fcda49/1553315204573/Antiphates.mp3/original/Antiphates.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b1f84785d3d5df32a396/1553315204576/Antiphus.mp3/original/Antiphus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b20471c10b6eca259edc/1553315204579/Apeire.mp3/original/Apeire.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b21453450a28e41ed9eb/1553315204582/Apheidas.mp3/original/Apheidas.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefbe/1553127774729/Aphrodite.mp3/original/Aphrodite.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefc0/1553127756035/Apollo.mp3/original/Apollo.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b2259140b79a9b2e5cad/1553315204585/Arcesius.mp3/original/Arcesius.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefc2/1553127842765/Ares.mp3/original/Ares.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefc4/1553128007075/Arete.mp3/original/Arete.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b23fee6eb05e1dd9b344/1553315204588/Arethusa.mp3/original/Arethusa.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b29e8165f590a8d39a06/1553315204591/Aretias.mp3/original/Aretias.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b2b0eb393132e856c5d0/1553315204594/Aretus.mp3/original/Aretus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b2bc1905f42a6f3e1dde/1553315204597/Argives.mp3/original/Argives.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b2c9e4966b0c56dc44d6/1553315204600/Argo.mp3/original/Argo.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b2efeb393132e856c761/1553315204602/Argos.mp3/original/Argos.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b2fd971a1829778dfc6e/1553315204605/Ariadne.mp3/original/Ariadne.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b3075bfa3f0001d40d5c/1553315204608/Arnaeus.mp3/original/Arnaeus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b3179b747a3f92217b36/1553315204611/Artaky.mp3/original/Artaky.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b322971a1829778dfdc8/1553315204613/Artemis.mp3/original/Artemis.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b32d24a694bdfd422be0/1553315204616/Arybas.mp3/original/Arybas.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefc6/1553128100738/Athena.mp3/original/Athena.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefc8/1553128186905/Atreus.mp3/original/Atreus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefca/1553128445899/Autolycus.mp3/original/Autolycus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9840fff9619a337b8a3bbb/1553481983315/Cadmus.mp3/original/Cadmus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefcc/1553128527059/Calypso.mp3/original/Calypso.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9aba18652deafccaaf737f/1553644057351/Charybdis+3.mp3/original/Charybdis+3.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c98411a971a182977a06093/1553482011190/Chloris.mp3/original/Chloris.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c98412fa4222ff8226cdc54/1553482031200/Cicones.mp3/original/Cicones.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c984139e2c4837cbb79684c/1553482042015/Cimmerians.mp3/original/Cimmerians.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefd0/1553128715666/Circe.mp3/original/Circe.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9573d2104c7b7aec9cefd2/1553128804718/Clytemnestra.mp3/original/Clytemnestra.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9841441905f42a6f5072e7/1553482052732/Creon.mp3/original/Creon.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c98409b9b747a3f9233d6bc/1553481883638/Cronus.mp3/original/Cronus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b58471c10b6eca25b715/1553128892586/Cyclops.mp3/original/Cyclops.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9840a74e17b612ddeb63c0/1553481895487/Cythera.mp3/original/Cythera.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9840be53450a28e431379f/1553481919006/Demeter.mp3/original/Demeter.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b58471c10b6eca25b717/1553128968079/Demodocus.mp3/original/Demodocus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9840cdc83025368bfb50f2/1553481933462/Dionysus.mp3/original/Dionysus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9840d7c83025368bfb512b/1553481944024/Dulichium.mp3/original/Dulichium.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b58471c10b6eca25b719/1553129051124/Elpenor.mp3/original/Elpenor.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983fe14785d3d5df45189a/1553481698464/Elysium.mp3/original/Elysium.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983fb1f4e1fc13f2374463/1553481651521/Eteoneus.mp3/original/Eteoneus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b58471c10b6eca25b71b/1553129134205/Eumaeus.mp3/original/Eumaeus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983f999b747a3f9233cc75/1553481625976/Eupeithes.mp3/original/Eupeithes.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983f7efa0d60765c4af99c/1553481599764/Eurus.mp3/original/Eurus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b58471c10b6eca25b71d/1553129273412/Eurycleia.mp3/original/Eurycleia.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b58471c10b6eca25b71f/1553129366391/Eurylochus.mp3/original/Eurylochus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983f720d9297aa15ab3a5d/1553481586935/Eurydice.mp3/original/Eurydice.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b58471c10b6eca25b721/1553129439815/Eurymachus.mp3/original/Eurymachus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983f46971a182977a04f44/1553481542392/Gaia.mp3/original/Gaia.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983f3cf4e1fc13f2374048/1553481532610/Geraestus.mp3/original/Geraestus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983f32eef1a1538c28fb11/1553481522349/Gyrae.mp3/original/Gyrae.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b58471c10b6eca25b723/1553129537837/Hades.mp3/original/Hades.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983f151972fb000172de91/1553481493306/Hermione.mp3/original/Hermione.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983ee0c67c2f00010f3d63/1553481440574/Iasion.mp3/original/Iasion.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983eed104c7b7aecb12151/1553481453941/Icarius.mp3/original/Icarius.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b58471c10b6eca25b725/1553129613695/Idomeneus.mp3/original/Idomeneus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983efb4192028641c264e8/1553481467759/Ino.mp3/original/Ino.mp3",

  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983e5b4192028641c25f61/1553481307324/Irus.mp3/original/Irus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5adb208fc2872711524/1553129738963/Ithaca.mp3/original/Ithaca.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983e2a1972fb000172d6f7/1553481259298/Itylus.mp3/original/Itylus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5adb208fc2872711526/1553129813644/Laertes.mp3/original/Laertes.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983e19104c7b7aecb11909/1553481242088/Laestrygonia.mp3/original/Laestrygonia.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983e0fe5e5f0b77760cb5b/1553481232472/Leda.mp3/original/Leda.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983e051905f42a6f50512b/1553481222094/Leodes.mp3/original/Leodes.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983dfae79c70b6f14b6142/1553481210635/Malea.mp3/original/Malea.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983df0e79c70b6f14b60ea/1553481200533/Megapenthes.mp3/original/Megapenthes.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983dce0d9297aa15ab2b06/1553481166875/Melanthius.mp3/original/Melanthius.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983dc34192028641c25a6f/1553481155298/Melantho.mp3/original/Melantho.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5aeb208fc2872711528/1553130079714/Menelaus.mp3/original/Menelaus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983db6e79c70b6f14b5ee0/1553481142338/Mentes.mp3/original/Mentes.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983dacf4e1fc13f23731f6/1553481132542/Mentor.mp3/original/Mentor.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983da29140b79a9b40a75a/1553481122330/Mesaulius.mp3/original/Mesaulius.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983d98c83025368bfb3414/1553481112357/Mycenae.mp3/original/Mycenae.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983d8271c10b6eca37fbb2/1553481090228/Myrmidons.mp3/original/Myrmidons.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5aeb208fc287271152a/1553130182126/Nausicaa.mp3/original/Nausicaa.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983d76f9619a337b8a1a97/1553481078370/Nausithous.mp3/original/Nausithous.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983d6a1905f42a6f504c12/1553481066341/Neaira.mp3/original/Neaira.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983d60e5e5f0b77760c58c/1553481056913/Neoptolemus.mp3/original/Neoptolemus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983d25652deafd31ef5c45/1553480997822/Noemon.mp3/original/Noemon.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5aeb208fc287271152c/1553130248299/Odysseus.mp3/original/Odysseus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983d1908522938215b2e5b/1553480985775/Ogygia.mp3/original/Ogygia.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983d0d4192028641c2534d/1553480973398/Patroclus.mp3/original/Patroclus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983cd46e9a7f21675f81f1/1553480917121/Persephone.mp3/original/Persephone.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e994f/1553222999870/Phaeacians.mp3/original/Phaeacians.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983cc808522938215b2a79/1553480905029/Phaethousa.mp3/original/Phaethousa.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983cbe1905f42a6f5044e9/1553480894253/Philoctetes.mp3/original/Philoctetes.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983cb34192028641c25042/1553480884082/Philomeleides.mp3/original/Philomeleides.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983ca2e4966b0c56ee798e/1553480866277/Phoenicia.mp3/original/Phoenicia.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983c93a4222ff8226caf91/1553480851239/Phthia.mp3/original/Phthia.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983c86a4222ff8226caf2c/1553480838910/Pirithous.mp3/original/Pirithous.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e9951/1553130449471/Pisistratus.mp3/original/Pisistratus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983c779140b79a9b409b74/1553480823308/Polybus.mp3/original/Polybus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983c5424a694bdfd5478a3/1553480788390/Polydeuces.mp3/original/Polydeuces.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e9953/1553130540094/Polyphemus.mp3/original/Polyphemus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e9955/1553130667606/Poseidon.mp3/original/Poseidon.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e9957/1553130724540/Priam.mp3/original/Priam.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e9959/1553222376521/Pumpkin.mp3/original/Pumpkin.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983c49c67c2f00010f260f/1553480777280/Pylos.mp3/original/Pylos.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983c2d104c7b7aecb107c6/1553480749967/Rhadamanthus.mp3/original/Rhadamanthus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e995b/1553130802201/Scheria.mp3/original/Scheria.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e995d/1553130915645/Scylla.mp3/original/Scylla.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983bd5104c7b7aecb104b9/1553480661289/Sintians.mp3/original/Sintians.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983bfcee6eb05e1debedde/1553480700555/Sisyphus.mp3/original/Sisyphus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c983bbbe2c4837cbb7935bb/1553480637123/Styx+2.mp3/original/Styx+2.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9837d2104c7b7aecb0dc62/1553479634394/Taygetus.mp3/original/Taygetus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e995f/1553131263652/Telemachus.mp3/original/Telemachus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9837c6f4e1fc13f236fa91/1553479622486/Temese.mp3/original/Temese.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9837b69140b79a9b406b64/1553479606961/Theoclymenus.mp3/original/Theoclymenus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9837abb208fc28728314a1/1553479595816/Thesprotia.mp3/original/Thesprotia.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c98379da4222ff8226c8101/1553479581197/Thetis.mp3/original/Thetis.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9836e8a4222ff8226c7a4e/1553479400616/Thoosa.mp3/original/Thoosa.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9836dc4e17b612ddeb09ad/1553479388238/Thrinacia.mp3/original/Thrinacia.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e9961/1553131345339/Thyestes.mp3/original/Thyestes.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e9963/1553131486246/Tiresias.mp3/original/Tiresias.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9836b6c83025368bfaf494/1553479350518/Tithonus.mp3/original/Tithonus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c9836acc67c2f00010ef37c/1553479340303/Tityus.mp3/original/Tityus.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c98369e4e17b612ddeb0763/1553479326965/Zephyr.mp3/original/Zephyr.mp3",
  "https://static1.squarespace.com/static/5a771bba12abd99bc6250a8c/t/5c95b5d8e5e5f0b7774e9965/1553132226085/Zeus.mp3/original/Zeus.mp3",
];

var wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "violet",
  progressColor: "purple",
});

wavesurfer.on("ready", function () {
  wavesurfer.play();
});

var nameList = document.querySelector("#nameList");

var nameArray = [];
var soundArray = [];

function displayNames() {
  for (let index = 0; index < sounds.length; index++) {
    const element = sounds[index];
    let initialName = element
      .substring(0, element.lastIndexOf(".mp3"))
      .split("/")
      .pop();
    if (initialName.includes("+")) {
      initialName = initialName.split("+")[0];
    }
    nameArray.push(initialName);
    console.log(element);
  }
  for (let index = 0; index < sounds.length; index++) {
    const element = sounds[index];
    soundArray.push(element);
  }
  for (let index = 0; index < nameArray.length; index++) {
    const odyNames = nameArray[index];
    const soundLink = soundArray[index];
    var button = document.createElement("button");
    button.textContent = odyNames;
    button.onclick = function (event) {
      console.log(event);
      console.log(soundLink);
      buttonTing(soundLink);
    };
    button.setAttribute("data-index", index);
    nameList.appendChild(button);
    console.log(odyNames);
  }
}

function buttonTing(soundUrl) {
  // var a = new Audio(soundUrl);
  wavesurfer.load(soundUrl);
  // a.play();
}

function onLoad() {
  displayNames();
}
window.onload = onLoad;
