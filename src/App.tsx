
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

export function App() {
  const cadastroUserSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    telefone: z.coerce.number(),
    cargo: z.string()
  })

  type userProps = z.infer<typeof cadastroUserSchema>

  const { register, handleSubmit  } = useForm<userProps>({
    resolver: zodResolver(cadastroUserSchema)
  })

  function createUser(data: userProps){
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(createUser)}>
          <h1>Fromulario de cadastro</h1>
          <div>
            <label htmlFor="name">Nome Completo</label>
            <input id='name' placeholder="Digite seu nome" {...register('name')} />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input id='email' placeholder="Digite seu e-mail" {...register('email')} />
          </div>
          <div>
            <label htmlFor="telefone">Telefone</label>
            <input id='telefone' placeholder="Digite seu Telefone" {...register('telefone')}/>
          </div>
          <div>
            <select id="cargo" {...register('cargo')}>
              <option value="1">Cargo</option>
              <option value="2">1</option>
              <option value="3">2</option>
              <option value="4">3</option>
              <option value="5">4</option>
              <option value="6">5</option>
            </select>
          </div>
            <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

