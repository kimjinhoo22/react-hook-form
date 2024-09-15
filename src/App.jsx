
import {useForm} from "react-hook-form";
import { useState } from "react";
import "./App.css"

function App() {
  const { register, handleSubmit, formState:{errors}, } = useForm({mode:"onChange"});
  // register : 입력 필드를 React Hook Form에 등록/ 입력 필드에 대한 유효성 검사 규칙, 기본값 등 설정 가능
  // handleSubmit : 폼을 제출할시 실행할 함수 / 유효성 검사를 수행하고 제출 데이터를 처리하는 로직을 작성 가능
  // formState : errors  : 유효성 검사 실패시 해당 필드에 에러메시지 표시 또는 포함

  const onSubmit = (data) => {
    console.log("폼 제출에 성공했습니다.")
    console.log(data);
  };

  const InSubmit= (errors)  =>{
    console.log(errors)
  }

  const registerOptions = {
    name : { required : "Name cannot be blank"},
    email : { required : "Email cannot be blank"},
    password : { required : "Password is required",
                  minLength:{
                      value:10,
                      message: "비밀번호는 적어도 10자 이상해주세요"
                  }
    },
    quantity : {
        required : "Quantity is required",
        min : {
          value : 0,
          message : "수량은 0보다 커야합니다."
        },
        max : {
          value : 10,
          message : "수량은 10보다 작아야합니다."
        }
    }
  }
  return(
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit , InSubmit)}>
        <input 
              type="text" 
              name="email" {...register("email",registerOptions.email)}/>
              <small>
                {errors?.email && errors.email.message}
              </small>
              

        <input 
              type="password" 
              name="password"  {...register("password" , registerOptions.password) } />
              <small>
               {errors?.password && errors.password.message} 
              </small>
        <input 
              type="number" 
              name="quantity"  {...register("quantity" , registerOptions.quantity) } />
        <small>
              {errors?.quantity && errors.quantity.message}
        </small>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App
