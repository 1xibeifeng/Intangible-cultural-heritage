// Toolbar.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';

interface ToolbarProps {
  selectedTab: string;
  onTabChange: (value: string) => void;
  loading: boolean;
  error: string | null;
  children?: React.ReactNode;
}

const Toolbar: React.FC<ToolbarProps> = ({ selectedTab, onTabChange, loading, error, children }) => {
  return (
    <Card className="absolute top-4 right-4 z-[1000]">
      <CardHeader>
        <CardTitle>工具栏</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs value={selectedTab} onValueChange={(value) => onTabChange(value)}>
          <TabsList>
            <TabsTrigger value="传承人">传承人</TabsTrigger>
            <TabsTrigger value="非物质文化遗产项目">非物质文化遗产项目</TabsTrigger>
            <TabsTrigger value="保护单位">保护单位</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* 搜索输入 */}
        <Input placeholder="搜索..." />

        {/* 切换侧边栏按钮 */}
        <div className="space-x-4">
          <Button onClick={() => { /* 切换侧边栏逻辑 */ }}>切换侧边栏</Button>
        </div>

        {/* 加载指示器 */}
        {loading && <p>加载中...</p>}

        {/* 错误信息 */}
        {error && <p className="text-red-500">{error}</p>}

        {children}
      </CardContent>
    </Card>
  );
}

export default Toolbar;