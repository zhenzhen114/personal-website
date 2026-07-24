import avatarImg from './assets/avatar.jpg'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-container">
          <span className="logo">张心雨</span>
          <ul className="nav-menu">
            <li><a href="#education">教育背景</a></li>
            <li><a href="#experience">实习经历</a></li>
            <li><a href="#projects">项目&荣誉</a></li>
            <li><a href="#skills">专业技能</a></li>
            <li><a href="#contact">联系我</a></li>
          </ul>
        </div>
      </nav>

      {/* 英雄区 */}
      <section className="hero">
        <div className="hero-content">
          <div className="avatar">
            <div className="avatar-placeholder">
              <img src={avatarImg} alt="张心雨" className="avatar-img" />
            </div>
          </div>
          <h1 className="hero-title">张心雨 <span className="hero-en">Zhang Xinyu</span></h1>
          <p className="hero-subtitle">香港城市大学 市场营销学硕士在读 · 财务管理学士</p>
          <p className="hero-description">
            持有初级会计师资格，通过 ACCA 前六门考核。具备财务审计、数据分析与 AI 产品能力，
            兼具跨专业项目管理经验，正积极探索财务 × 科技 × 市场的交叉领域。
          </p>
          <div className="hero-tags">
            <span className="tag">💼 财务 & 审计</span>
            <span className="tag">📊 数据分析</span>
            <span className="tag">🤖 AI 产品</span>
            <span className="tag">🌏 市场营销</span>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">联系我</a>
            <a href="#experience" className="btn btn-secondary">查看经历</a>
          </div>
        </div>
      </section>

      {/* 教育背景 */}
      <section id="education" className="section section-alt">
        <div className="container">
          <h2 className="section-title">教育背景</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>香港城市大学</h3>
                  <span className="timeline-date">2026.08 — 2027.07</span>
                </div>
                <p className="timeline-role">市场营销学 · 理学硕士</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>天津科技大学</h3>
                  <span className="timeline-date">2022.09 — 2026.06</span>
                </div>
                <p className="timeline-role">财务管理学 · 理学学士</p>
                <ul className="timeline-list">
                  <li>班长兼任团支部书记，班级综合成绩全专业第 1 名</li>
                  <li>连续两年获评"特色班级"二等奖，荣获"五四优秀团支部"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实习经历 */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">实习经历</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>天津市河西区财政局</h3>
                  <span className="timeline-date">2026.01 — 2026.03</span>
                </div>
                <p className="timeline-role">行政管理二部</p>
                <ul className="timeline-list">
                  <li>担任"河西区城市道路公园绿化项目"核心协调人，全程统筹预算审核与进度管理</li>
                  <li>运用 Excel 高级功能统计分析财政支出与项目进度数据，制作动态图表，支撑部门决策</li>
                  <li>独立核对数百份预算单位支出凭证与合同，确保合规性，实现资金支付零差错</li>
                  <li>独立完成外包公司考核标准优化方案，设计闭环管理流程并获采纳</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>大信会计师事务所（特殊普通合伙）</h3>
                  <span className="timeline-date">2024.04 — 2024.06</span>
                </div>
                <p className="timeline-role">审计二组</p>
                <ul className="timeline-list">
                  <li>独立编制试算平衡表，核对账目 2,000+ 条，识别差异 50+ 处</li>
                  <li>利用天眼查等工具对 10+ 家客户开展工商信息、法律风险及舆情排查，出具风险评估表</li>
                  <li>独立发出银行询证函 30+ 份，跟进回函并核对，确保货币资金审计准确率 100%</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>天津九牧盛世科技有限公司</h3>
                  <span className="timeline-date">2024.07 — 2024.09</span>
                </div>
                <p className="timeline-role">财务部</p>
                <ul className="timeline-list">
                  <li>日均对接客户 20+ 家，订单处理准确率 100%，客户满意度 95% 以上</li>
                  <li>参与月度库存盘点，覆盖 6 大品类 300+ 项物料，确保库存数据准确率 98%+</li>
                  <li>参与季度财务预算编制，完成预算报告及总结报告各 1 份</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 项目 & 荣誉 */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <h2 className="section-title">项目 & 荣誉</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-badge award">🥈 银奖</div>
              <h3>安徽省大学生创新大赛</h3>
              <span className="project-date">2024.08</span>
              <p>统筹项目全流程推进，协调 3 人跨专业团队完成技术验证、市场分析及财务测算。独立搭建财务模型，预计 3 年累计营收超 200 万元，获省级银奖。</p>
            </div>
            <div className="project-card">
              <div className="project-badge competition">🏆 挑战杯</div>
              <h3>益生菌茶饮创业计划</h3>
              <span className="project-date">2024.04</span>
              <p>项目组长，调研竞品 20+ 款，回收问卷 300+ 份，独立完成成本-营收模型，预计首年营收突破 50 万元。</p>
            </div>
            <div className="project-card">
              <div className="project-badge research">🎨 非遗传承</div>
              <h3>裕固族服饰文化研究</h3>
              <span className="project-date">2025.04</span>
              <p>项目组长，走访河西走廊非遗传承人 5+ 位，整理史料 200+ 份，提出"文化+文创+旅游"融合创新方案，设计 3 套文创产品概念。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 专业技能 */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">专业技能</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">📜</div>
              <h3>专业资质</h3>
              <p>初级会计师 · ACCA 前六门 · 财务 / 审计 / 商法知识框架</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📊</div>
              <h3>数据分析</h3>
              <p>Excel 高级 · SQL · Python · Stata · 数据可视化</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🤖</div>
              <h3>AI 产品能力</h3>
              <p>Prompt 工程 · AIGC · RAG 检索增强 · AI 智能体运营 · 用户情感分析</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🌏</div>
              <h3>语言能力</h3>
              <p>中文（母语）· 英语（雅思 6.5，流畅）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我 */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">联系我</h2>
          <div className="contact-content">
            <p className="contact-intro">欢迎合作交流，期待与您连接！</p>
            <div className="contact-methods">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h3>邮箱</h3>
                  <a href="mailto:zcz20031105@163.com">zcz20031105@163.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🏫</span>
                <div>
                  <h3>学校</h3>
                  <span>香港城市大学 · 市场营销学硕士</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 张心雨 Zhang Xinyu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
