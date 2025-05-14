import MVCard from "@/components/MVCard"

const About = () => {
  return (
    <div className="p-2 md:p-8 lg:p-16 flex flex-col gap-5 items-center">
      {/* introdiv */}
      <div className="bg-red-500 flex flex-col p-4 rounded-md w-full">
        <h1>Introduction</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatum repudiandae non. Ducimus modi accusantium quod dolore molestiae vero quaerat dignissimos, natus maiores voluptates corrupti repellat, consectetur accusamus ullam, ipsam pariatur! Tempora perspiciatis non delectus corporis, quam nesciunt voluptate a debitis nihil iusto repellat tempore eveniet libero sapiente quis accusamus dignissimos temporibus corrupti. Saepe aut corporis hic eveniet ducimus sunt, laborum sapiente exercitationem harum magni voluptates debitis, modi veritatis quis quasi. Voluptate blanditiis vero similique cumque, rem libero fugit aliquam, sequi tempore officia nesciunt aperiam culpa reiciendis quam! Officiis eligendi sunt error numquam consequatur molestias saepe placeat eos similique quod quam nihil a, qui, vitae eaque inventore animi perspiciatis ea quae ullam excepturi. Possimus natus provident, eveniet fugit amet iure recusandae voluptates tenetur saepe corrupti perferendis! Doloremque provident maiores voluptas earum illo suscipit cum aliquid quaerat at? Deserunt alias nemo explicabo veritatis autem, culpa ad nam voluptatum aperiam architecto ullam corporis possimus aut. Fugit culpa amet iste placeat odio facilis minima obcaecati repudiandae voluptate nisi, omnis, ullam, neque distinctio nemo temporibus! Porro voluptatum repellat veritatis est dignissimos tenetur odit, quia alias aperiam at aut dolorum numquam nostrum, reiciendis illum facilis sit corporis unde tempora magnam inventore. Et eaque est, perspiciatis cumque optio ea nihil possimus consectetur. Nam in temporibus adipisci nulla aliquid molestias molestiae nisi, doloribus possimus dolore? Cum, asperiores accusantium! Error dolore perferendis debitis ad delectus, expedita sint nemo suscipit laboriosam alias minima similique eveniet, quae et voluptatem cum ullam corporis ipsum harum, deleniti eos pariatur qui laborum aspernatur! Magnam odit nesciunt provident, perspiciatis molestiae cupiditate architecto eos aperiam ipsum obcaecati dolore amet commodi vero eius blanditiis sequi aut id. Quam enim voluptatibus maxime porro quo quae quis temporibus sit facere, quos, placeat praesentium? Iusto culpa pariatur a repudiandae! Beatae, porro modi deserunt officia ipsum quasi minima ab. Rerum omnis a odio reiciendis dolores recusandae sint enim velit sunt dignissimos assumenda pariatur expedita laborum ratione autem excepturi, sequi in culpa perferendis impedit hic aspernatur accusamus ab! Facere dolorem ex deserunt omnis velit ea sit dolor voluptatum ab distinctio possimus quibusdam labore modi corrupti fuga qui voluptatem, nemo blanditiis corporis dolorum voluptas similique nostrum in esse. Aliquam sunt totam earum atque quo? Dolorum praesentium quos atque libero distinctio molestias expedita ea dignissimos explicabo cupiditate blanditiis temporibus recusandae vitae accusantium reprehenderit provident, voluptatem ullam ipsum voluptate optio modi tempora est asperiores aliquid. Non alias incidunt magnam iure, qui voluptates sint fugiat dicta est modi laborum nemo eligendi facilis nostrum iusto repellendus consectetur aliquam et dolorum id error? Nesciunt sunt consequuntur eius, maiores doloribus, repellat tempora eos aliquid illo sequi esse quia iste possimus totam vero mollitia quod qui voluptatum laboriosam officia magni voluptatem provident ad nobis? Beatae amet, exercitationem harum obcaecati fuga eius distinctio quisquam reprehenderit aliquid earum perspiciatis adipisci, nam ullam minus incidunt dicta est ut maiores molestias, odio cumque maxime laboriosam! Delectus sequi unde ratione in eaque quo itaque, ab nihil eos amet nesciunt sed est quos quasi aliquid necessitatibus sunt inventore quas? Culpa similique amet quis quae placeat.</p>
      </div>    

      {/* teamdiv */}
      <div className="p-4">
        <h1 className="text-center">Teams</h1>
        <img src="team.jpeg" alt="teamImage" className="rounded-md shadow-md" />
      </div>
     
      <div className="flex flex-col gap-8 md:flex-row items-center justify-between p-5">
        <MVCard title="Mission">
          {/* content */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci sunt veritatis ut illo nobis repellendus beatae magnam neque unde ipsam consequuntur nostrum dolores, odio nemo sit exercitationem ea necessitatibus officiis, quos aspernatur temporibus? Nobis quam laboriosam ipsa quis quidem rerum debitis voluptatum totam tenetur. Illo quisquam cupiditate assumenda ratione!
        </MVCard>
        <MVCard title="Vision">
          {/* content */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci sunt veritatis ut illo nobis repellendus beatae magnam neque unde ipsam consequuntur nostrum dolores, odio nemo sit exercitationem ea necessitatibus officiis, quos aspernatur temporibus? Nobis quam laboriosam ipsa quis quidem rerum debitis voluptatum totam tenetur. Illo quisquam cupiditate assumenda ratione!
        </MVCard>
      </div>

      {/* values */}

      <div className="w-[80%] p-3 bg-orange-300 rounded-md shadow-md">
        <h1 className="text-center font-bold">Values</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores amet earum repudiandae ratione dolores officia voluptates ullam officiis quas magni non illo exercitationem repellat aspernatur modi repellendus facilis illum in, omnis commodi ad dignissimos qui consectetur. Ab exercitationem velit cupiditate eligendi laboriosam omnis facere quisquam, et, maxime necessitatibus eveniet eius quibusdam porro labore cum eaque at suscipit iste esse magni!</p>
      </div>
   </div>
  )
}

export default About